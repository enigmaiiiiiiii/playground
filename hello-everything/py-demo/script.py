import bpy
import mathutils

# Create a new armature object
bpy.ops.object.armature_add()

# Get a reference to the armature object
armature = bpy.context.object

# Set armature location
armature.location = mathutils.Vector((0, 0, 0))

# Add bones to the armature
bpy.ops.object.mode_set(mode='EDIT')
bones = ['head', 'neck', 'chest', 'pelvis', 'thigh.L', 'shin.L', 'foot.L', 'toe.L', 'thigh.R', 'shin.R', 'foot.R', 'toe.R', 'shoulder.L', 'upperarm.L', 'forearm.L', 'hand.L', 'shoulder.R', 'upperarm.R', 'forearm.R', 'hand.R']
for bone_name in bones:
    bone = armature.data.edit_bones.new(bone_name)
    bone.head = mathutils.Vector((0, 0, 0))
    bone.tail = mathutils.Vector((0, 0.5, 0))

# Add a mesh object to the scene
bpy.ops.mesh.primitive_cube_add(location=(0, 0, 0))
mesh = bpy.context.active_object

# Add an armature modifier to the mesh object
mod = mesh.modifiers.new('Armature', 'ARMATURE')
mod.object = armature

# Create an armature animation
bpy.ops.object.mode_set(mode='POSE')
frame_num = 0
bpy.ops.anim.keyframe_insert(type='BUILTIN_KSI_LocRot')
for bone_name in bones:
    bone = armature.pose.bones[bone_name]
    bone.location = mathutils.Vector((0, 0.5, 0))
    bone.keyframe_insert(data_path='location', frame=frame_num)
    frame_num += 10

# Apply scale to the mesh object
bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.object.select_all(action='DESELECT')
mesh.select_set(True)
bpy.context.view_layer.objects.active = mesh
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
