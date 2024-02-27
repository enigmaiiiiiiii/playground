using System;
using System.Collections.Generic;

namespace BoxA
{
    // Simple business object.
    public readonly struct Person(string firstName, string lastName)
    {
        public string FirstName { get; } = firstName;
        public string LastName { get; } = lastName;
    }

    // Collection of Person objects. This class
    // implements IEnumerable so that it can be used
    // with ForEach syntax.
    public class PeopleCollection : IEnumerable<Person>
    {
        private readonly Person[] _people;
        public PeopleCollection(Person[] pArray)
        {
            _people = new Person[pArray.Length];

            for (int i = 0; i < pArray.Length; i++)
            {
                _people[i] = pArray[i];
            }
        }

        // Implementation for the GetEnumerator method.
        IEnumerator<Person> IEnumerable<Person>.GetEnumerator()
        {
            return GetEnumerator();
        }

        public PeopleEnumerator GetEnumerator()
        {
            return new PeopleEnumerator(_people);
        }
    }

    // When you implement IEnumerable, you must also implement IEnumerator.
    public struct PeopleEnumerator() : IEnumerator<Person>
    {
        private readonly Person[] People { get; }

        // Enumerators are positioned before the first element
        // until the first MoveNext() call.
        private int position = -1;

        public PeopleEnumerator(Person[] people)
        {
            People = people;
        }

        public bool MoveNext()
        {
            position++;
            return position < People.Length;
        }

        public void Reset()
        {
            position = -1;
        }

        object IEnumerator.Current => Current;

        public readonly Person Current
        {
            get
            {
                try
                {
                    return People[position];
                }
                catch (IndexOutOfRangeException)
                {
                    throw new InvalidOperationException();
                }
            }
        }

        public readonly void Dispose() { }
    }

    public class App
    {
        public static void Main()
        {
            Person[] peopleArray =
            [
                new("John", "Smith"),
                new("Jim", "Johnson"),
                new("Sue", "Rabon")
            ];

            PeopleCollection peopleList = new(peopleArray);
            foreach (Person p in peopleList)
            {
                Console.WriteLine(p.FirstName + " " + p.LastName);
            }
        }
    }

    /* This code produces output similar to the following:
     *
     * John Smith
     * Jim Johnson
     * Sue Rabon
     */

}
