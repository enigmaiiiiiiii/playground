import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export function showNotification(msg, theme = 'dark') {
  Toastify({
    text: msg,
    duration: 2000,
    gravity: 'top',
    position: 'right',
    style: {
      background: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333',
    },
  }).showToast();
}