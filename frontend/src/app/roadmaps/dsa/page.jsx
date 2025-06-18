"use client";

import React, { useState } from 'react';
import DsaSidebar from './components/DsaSidebar';

// Add responsive utility classes
const responsiveClasses = {
  text: "text-sm lg:text-base",
  heading: "text-lg lg:text-xl font-semibold mb-2 lg:mb-4",
  subheading: "text-base lg:text-lg font-semibold mb-2",
  paragraph: "text-sm lg:text-base text-white-700 mb-4",
  list: "list-disc list-inside text-white-700 space-y-1 text-sm lg:text-base",
  codeBlock: "bg-gray-100 p-3 lg:p-4 rounded-lg",
  codeText: "text-xs lg:text-sm text-dark-600 overflow-x-auto",
  table: "min-w-full bg-gray-100 rounded-lg text-xs lg:text-sm",
  tableCell: "p-2 lg:p-3 text-dark-600",
  tableHeader: "p-2 lg:p-3 text-dark-600 font-semibold"
};

const topics = [
  {
    id: 'fundamentals',
    name: 'Step 1: Programming Language Fundamentals',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 1: Programming Language Fundamentals</h3>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Introduction</h4>
          <p className="text-white-700 mb-4 text-sm lg:text-base">
            A programming language is a set of instructions and syntax used to create software programs. Some of the key features of programming languages include:
          </p>
          <ul className="list-disc list-inside text-white-700 space-y-1 mb-4 text-sm lg:text-base">
            <li><strong>Syntax:</strong> The specific rules and structure used to write code in a programming language.</li>
            <li><strong>Data Types:</strong> The type of values that can be stored in a program, such as numbers, strings, and booleans.</li>
            <li><strong>Variables:</strong> Named memory locations that can store values.</li>
            <li><strong>Operators:</strong> Symbols used to perform operations on values, such as addition, subtraction, and comparison.</li>
            <li><strong>Control Structures:</strong> Statements used to control the flow of a program, such as if-else statements, loops, and function calls.</li>
            <li><strong>Libraries and Frameworks:</strong> Collections of pre-written code that can be used to perform common tasks and speed up development.</li>
            <li><strong>Paradigms:</strong> The programming style or philosophy used in the language, such as procedural, object-oriented, or functional.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Popular Programming Languages</h4>
          <p className="text-white-700 mb-2 text-sm lg:text-base">
            Examples of popular programming languages include Python, Java, C++, JavaScript, and Ruby. Each language has its own strengths and weaknesses and is suited for different types of projects.
          </p>
          <div className="grid text-dark-600 grid-cols-2 md:grid-cols-4 gap-2 text-xs lg:text-sm">
            <div className="bg-blue-50 p-2 rounded">C</div>
            <div className="bg-blue-50 p-2 rounded">Python</div>
            <div className="bg-blue-50 p-2 rounded">C++</div>
            <div className="bg-blue-50 p-2 rounded">Java</div>
            <div className="bg-blue-50 p-2 rounded">JavaScript</div>
            <div className="bg-blue-50 p-2 rounded">C#</div>
            <div className="bg-blue-50 p-2 rounded">Ruby</div>
            <div className="bg-blue-50 p-2 rounded">Go</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Basic Terminologies in Programming Languages</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1 text-sm lg:text-base">
            <li><strong>Algorithm:</strong> A step-by-step procedure for solving a problem or performing a task.</li>
            <li><strong>Variable:</strong> A named storage location in memory that holds a value or data.</li>
            <li><strong>Data Type:</strong> A classification that specifies what type of data a variable can hold.</li>
            <li><strong>Function:</strong> A self-contained block of code that performs a specific task.</li>
            <li><strong>Control Flow:</strong> The order in which statements are executed in a program.</li>
            <li><strong>Syntax:</strong> The set of rules that govern the structure and format of a programming language.</li>
            <li><strong>Debugging:</strong> The process of finding and fixing errors or bugs in a program.</li>
            <li><strong>IDE:</strong> Integrated Development Environment for coding, debugging, and testing.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Basic Example: Adding Two Numbers</h4>
          <div className="bg-gray-100 p-3 lg:p-4 rounded-lg">
            <p className="text-xs lg:text-sm text-dark-600 mb-2">C++ Example:</p>
            <pre className="text-xs lg:text-sm text-dark-600 overflow-x-auto">
              {`#include <iostream>
using namespace std;

int main() {  
    int a, b, sum;
    a = 10;
    b = 15;
    sum = a + b;
    cout << "Sum of " << a << " and " << b << " is: " << sum;
    return 0;
}`}
            </pre>
            <p className="text-xs lg:text-sm text-white-600 mt-2">Output: Sum of 10 and 15 is: 25</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Characteristics of a Programming Language</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1 text-sm lg:text-base">
            <li>Simple, easy to learn and use, with good readability</li>
            <li>Abstraction capability for complex structures</li>
            <li>Portability across different platforms</li>
            <li>High efficiency for machine code conversion</li>
            <li>Well-structured and documented for application development</li>
            <li>Provides necessary tools for development, debugging, testing</li>
            <li>Single environment known as Integrated Development Environment (IDE)</li>
            <li>Consistent syntax and semantics</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Tips for Learning New Programming Languages</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1 text-sm lg:text-base">
            <li><strong>Start with fundamentals:</strong> Learn syntax, data types, variables, and simple statements</li>
            <li><strong>Code daily:</strong> Practice regularly to improve your skills</li>
            <li><strong>Work on projects:</strong> Apply what you've learned to real projects</li>
            <li><strong>Read documentation:</strong> Understand features, syntax, and best practices</li>
            <li><strong>Join online communities:</strong> Connect with other developers for support</li>
            <li><strong>Learn from others:</strong> Find mentors and review their code</li>
            <li><strong>Practice debugging:</strong> Develop essential error-fixing skills</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'basic-ds',
    name: 'Step 2: Basic Data Structures',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 2: Basic Data Structures</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Introduction to Data Structures</h4>
          <p className="text-white-700 mb-4">
            Data structures are fundamental building blocks of computer science that organize and store data in a way that enables efficient access and modification. Understanding these basic structures is crucial for writing efficient algorithms.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">1. Arrays</h4>
          <p className="text-white-700 mb-2">
            Arrays are the simplest data structure that stores elements of the same data type in contiguous memory locations.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Key Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Fixed size (in most languages)</li>
              <li>Random access - O(1) time complexity</li>
              <li>Contiguous memory allocation</li>
              <li>Index-based access</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-dark-600 mb-2">Operations & Time Complexity:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Access: O(1)</li>
              <li>Search: O(n)</li>
              <li>Insertion: O(n)</li>
              <li>Deletion: O(n)</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">2. Linked Lists</h4>
          <p className="text-white-700 mb-2">
            A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Types of Linked Lists:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Singly Linked List</li>
              <li>Doubly Linked List</li>
              <li>Circular Linked List</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-dark-600 mb-2">Operations & Time Complexity:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Access: O(n)</li>
              <li>Search: O(n)</li>
              <li>Insertion: O(1) at beginning, O(n) at end</li>
              <li>Deletion: O(1) at beginning, O(n) at end</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">3. Stacks</h4>
          <p className="text-white-700 mb-2">
            A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements can only be added or removed from the top.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Common Operations:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>push() - Add element to top</li>
              <li>pop() - Remove element from top</li>
              <li>peek() - View top element</li>
              <li>isEmpty() - Check if stack is empty</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-dark-600 mb-2">Applications:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Function call management</li>
              <li>Undo operations</li>
              <li>Expression evaluation</li>
              <li>Backtracking algorithms</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">4. Queues</h4>
          <p className="text-white-700 mb-2">
            A queue is a linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Types of Queues:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Simple Queue</li>
              <li>Circular Queue</li>
              <li>Priority Queue</li>
              <li>Double-ended Queue (Deque)</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-dark-600 mb-2">Applications:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Task scheduling</li>
              <li>Breadth-First Search</li>
              <li>Print spooling</li>
              <li>CPU scheduling</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">5. Hash Tables</h4>
          <p className="text-white-700 mb-2">
            A hash table is a data structure that stores key-value pairs and uses a hash function to compute an index into an array of buckets.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Key Features:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Average O(1) time complexity for search, insert, delete</li>
              <li>Uses hash function for key mapping</li>
              <li>Handles collisions through chaining or open addressing</li>
              <li>Unordered data storage</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-dark-600 mb-2">Applications:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Database indexing</li>
              <li>Cache implementation</li>
              <li>Symbol tables in compilers</li>
              <li>Duplicate detection</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Implementation Example: Stack in Python</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # Output: 3`}
            </pre>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'big-o',
    name: 'Step 3: Algorithmic Complexity (Big O Notation)',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 3: Algorithmic Complexity (Big O Notation)</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Introduction to Algorithmic Complexity</h4>
          <p className="text-white-700 mb-4">
            Algorithmic complexity is a measure of the efficiency of an algorithm in terms of time and space requirements. Big O notation is the most common way to express this complexity, helping us understand how an algorithm's performance scales with input size.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">What is Big O Notation?</h4>
          <p className="text-white-700 mb-2">
            Big O notation describes the upper bound of an algorithm's growth rate. It helps us understand the worst-case scenario for an algorithm's performance.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-dark-600 mb-2">Key Concepts:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Measures growth rate, not actual time</li>
              <li>Focuses on the dominant term</li>
              <li>Ignores constants and lower-order terms</li>
              <li>Describes worst-case scenario</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Common Time Complexities</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">O(1) - Constant Time</h5>
              <p className="text-dark-600 text-sm mb-2">Operations that take the same time regardless of input size.</p>
              <p className="text-dark-600 text-sm">Examples: Array access, Hash table operations</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">O(log n) - Logarithmic Time</h5>
              <p className="text-dark-600 text-sm mb-2">Operations that reduce the problem size by half each time.</p>
              <p className="text-dark-600 text-sm">Examples: Binary search, Balanced tree operations</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">O(n) - Linear Time</h5>
              <p className="text-dark-600 text-sm mb-2">Operations that process each element once.</p>
              <p className="text-dark-600 text-sm">Examples: Linear search, Array traversal</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">O(n log n) - Linearithmic Time</h5>
              <p className="text-dark-600 text-sm mb-2">Common in efficient sorting algorithms.</p>
              <p className="text-dark-600 text-sm">Examples: Merge sort, Quick sort, Heap sort</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">O(n²) - Quadratic Time</h5>
              <p className="text-dark-600 text-sm mb-2">Operations with nested loops.</p>
              <p className="text-dark-600 text-sm">Examples: Bubble sort, Selection sort, Nested loops</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">O(2ⁿ) - Exponential Time</h5>
              <p className="text-dark-600 text-sm mb-2">Operations that grow exponentially with input size.</p>
              <p className="text-dark-600 text-sm">Examples: Recursive Fibonacci, Brute force algorithms</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Space Complexity</h4>
          <p className="text-white-700 mb-2">
            Space complexity measures the amount of memory an algorithm uses relative to the input size.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-dark-600 mb-2">Common Space Complexities:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>O(1) - Constant space (in-place algorithms)</li>
              <li>O(n) - Linear space (arrays, linked lists)</li>
              <li>O(n²) - Quadratic space (2D arrays, adjacency matrices)</li>
              <li>O(log n) - Logarithmic space (recursive algorithms)</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Big O, Big Omega, and Big Theta</h4>
          <div className="space-y-3">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Big O (O) - Upper Bound</h5>
              <p className="text-dark-600 text-sm">Describes the worst-case scenario. Algorithm will not take more time than this.</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Big Omega (Ω) - Lower Bound</h5>
              <p className="text-dark-600 text-sm">Describes the best-case scenario. Algorithm will take at least this much time.</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Big Theta (Θ) - Tight Bound</h5>
              <p className="text-dark-600 text-sm">Describes both upper and lower bounds. Algorithm's time complexity is exactly this.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Analysis Examples</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Example 1: Linear Search</h5>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`def linear_search(arr, target):
    for i in range(len(arr)):  # O(n)
        if arr[i] == target:   # O(1)
            return i           # O(1)
    return -1                 # O(1)

# Time Complexity: O(n)
# Space Complexity: O(1)`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Example 2: Nested Loops</h5>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`def print_pairs(arr):
    for i in range(len(arr)):        # O(n)
        for j in range(len(arr)):    # O(n)
            print(arr[i], arr[j])    # O(1)

# Time Complexity: O(n²)
# Space Complexity: O(1)`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Tips for Analyzing Complexity</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1">
            <li>Focus on the dominant term (highest power of n)</li>
            <li>Ignore constants and coefficients</li>
            <li>Consider the worst-case scenario</li>
            <li>Look for nested loops and recursive calls</li>
            <li>Remember that some operations have hidden complexity</li>
            <li>Practice with different algorithm patterns</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'sorting',
    name: 'Step 4: Sorting Algorithms',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 4: Sorting Algorithms</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Introduction to Sorting</h4>
          <p className="text-white-700 mb-4">
            Sorting is one of the most fundamental operations in computer science. A sorting algorithm rearranges elements in a specific order (ascending or descending). Understanding different sorting algorithms helps in choosing the right one for specific use cases.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Classification of Sorting Algorithms</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">By Time Complexity</h5>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>O(n²) - Bubble, Selection, Insertion</li>
                <li>O(n log n) - Merge, Quick, Heap</li>
                <li>O(n) - Counting, Radix, Bucket</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">By Space Complexity</h5>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>In-place: O(1) - Bubble, Selection, Insertion</li>
                <li>Out-of-place: O(n) - Merge, Quick, Heap</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">1. Bubble Sort</h4>
          <p className="text-white-700 mb-2">
            A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(n²) worst and average, O(n) best</li>
              <li>Space Complexity: O(1)</li>
              <li>Stable: Yes</li>
              <li>In-place: Yes</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">2. Selection Sort</h4>
          <p className="text-white-700 mb-2">
            Divides the array into a sorted and unsorted region, repeatedly selects the smallest element from the unsorted region.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(n²) all cases</li>
              <li>Space Complexity: O(1)</li>
              <li>Stable: No</li>
              <li>In-place: Yes</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">3. Insertion Sort</h4>
          <p className="text-white-700 mb-2">
            Builds the final sorted array one item at a time, by repeatedly inserting a new element into the sorted portion of the array.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(n²) worst and average, O(n) best</li>
              <li>Space Complexity: O(1)</li>
              <li>Stable: Yes</li>
              <li>In-place: Yes</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">4. Merge Sort</h4>
          <p className="text-white-700 mb-2">
            A divide-and-conquer algorithm that recursively breaks down the array into smaller subarrays until each has only one element, then merges them back together.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(n log n) all cases</li>
              <li>Space Complexity: O(n)</li>
              <li>Stable: Yes</li>
              <li>In-place: No</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">5. Quick Sort</h4>
          <p className="text-white-700 mb-2">
            A highly efficient, comparison-based sorting algorithm that uses a divide-and-conquer strategy with a pivot element.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(n log n) average, O(n²) worst</li>
              <li>Space Complexity: O(log n) average</li>
              <li>Stable: No</li>
              <li>In-place: Yes (with optimization)</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">6. Heap Sort</h4>
          <p className="text-white-700 mb-2">
            Uses a binary heap data structure to sort elements. It first builds a max heap, then repeatedly extracts the maximum element.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(n log n) all cases</li>
              <li>Space Complexity: O(1)</li>
              <li>Stable: No</li>
              <li>In-place: Yes</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Comparison Summary</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 rounded-lg text-xs lg:text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 lg:p-3 text-dark-600">Algorithm</th>
                  <th className="text-left p-2 lg:p-3 text-dark-600">Best</th>
                  <th className="text-left p-2 lg:p-3 text-dark-600">Average</th>
                  <th className="text-left p-2 lg:p-3 text-dark-600">Worst</th>
                  <th className="text-left p-2 lg:p-3 text-dark-600">Space</th>
                  <th className="text-left p-2 lg:p-3 text-dark-600">Stable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 lg:p-3 text-dark-600">Bubble Sort</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n²)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n²)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(1)</td>
                  <td className="p-2 lg:p-3 text-dark-600">Yes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 lg:p-3 text-dark-600">Selection Sort</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n²)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n²)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n²)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(1)</td>
                  <td className="p-2 lg:p-3 text-dark-600">No</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 lg:p-3 text-dark-600">Insertion Sort</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n²)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n²)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(1)</td>
                  <td className="p-2 lg:p-3 text-dark-600">Yes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 lg:p-3 text-dark-600">Merge Sort</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n log n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n log n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n log n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">Yes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 lg:p-3 text-dark-600">Quick Sort</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n log n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n log n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n²)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(log n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">No</td>
                </tr>
                <tr>
                  <td className="p-2 lg:p-3 text-dark-600">Heap Sort</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n log n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n log n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(n log n)</td>
                  <td className="p-2 lg:p-3 text-dark-600">O(1)</td>
                  <td className="p-2 lg:p-3 text-dark-600">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">When to Use Which Algorithm?</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1 text-sm lg:text-base">
            <li><strong>Small datasets (&lt; 50 elements):</strong> Insertion Sort</li>
            <li><strong>Nearly sorted data:</strong> Insertion Sort</li>
            <li><strong>Large datasets:</strong> Quick Sort, Merge Sort, Heap Sort</li>
            <li><strong>Memory constraints:</strong> Heap Sort, In-place Quick Sort</li>
            <li><strong>Stability required:</strong> Merge Sort, Insertion Sort</li>
            <li><strong>Worst-case guarantee:</strong> Merge Sort, Heap Sort</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'searching',
    name: 'Step 5: Searching Algorithms',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 5: Searching Algorithms</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Introduction to Searching</h4>
          <p className="text-white-700 mb-4">
            Searching algorithms are used to find specific elements within a data structure. The efficiency of a search algorithm depends on the data structure being searched and whether the data is sorted or not.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">1. Linear Search</h4>
          <p className="text-white-700 mb-2">
            Linear search is the simplest searching algorithm that checks each element in the list sequentially until the target element is found or the end of the list is reached.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(n) worst and average, O(1) best</li>
              <li>Space Complexity: O(1)</li>
              <li>Works on both sorted and unsorted arrays</li>
              <li>Simple to implement</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Return index if found
    return -1  # Return -1 if not found

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
target = 22
result = linear_search(arr, target)
print(f"Element {target} found at index: {result}")`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">2. Binary Search</h4>
          <p className="text-white-700 mb-2">
            Binary search is an efficient algorithm for finding an element in a sorted array. It works by repeatedly dividing the search interval in half.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(log n)</li>
              <li>Space Complexity: O(1) iterative, O(log n) recursive</li>
              <li>Requires sorted array</li>
              <li>Very efficient for large datasets</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <h5 className="font-semibold text-dark-600 mb-2">Iterative Implementation:</h5>
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def binary_search_iterative(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`}
            </pre>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h5 className="font-semibold text-dark-600 mb-2">Recursive Implementation:</h5>
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def binary_search_recursive(arr, target, left, right):
    if left > right:
        return -1
    
    mid = (left + right) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

# Wrapper function
def binary_search(arr, target):
    return binary_search_recursive(arr, target, 0, len(arr) - 1)`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">3. Jump Search</h4>
          <p className="text-white-700 mb-2">
            Jump search is an algorithm for searching sorted arrays that works by jumping ahead by fixed steps and then performing a linear search in the identified block.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(√n)</li>
              <li>Space Complexity: O(1)</li>
              <li>Requires sorted array</li>
              <li>Better than linear search, worse than binary search</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`import math

def jump_search(arr, target):
    n = len(arr)
    step = math.sqrt(n)
    prev = 0
    
    # Finding the block where element is present
    while arr[int(min(step, n) - 1)] < target:
        prev = step
        step += math.sqrt(n)
        if prev >= n:
            return -1
    
    # Linear search in the identified block
    while prev < min(step, n):
        if arr[int(prev)] == target:
            return int(prev)
        prev += 1
    
    return -1`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">4. Interpolation Search</h4>
          <p className="text-white-700 mb-2">
            Interpolation search is an improvement over binary search for uniformly distributed sorted arrays. It uses position formula to probe the position of the target.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(log log n) average, O(n) worst</li>
              <li>Space Complexity: O(1)</li>
              <li>Requires sorted and uniformly distributed array</li>
              <li>Most efficient for uniformly distributed data</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def interpolation_search(arr, target):
    low, high = 0, len(arr) - 1
    
    while low <= high and arr[low] <= target <= arr[high]:
        if low == high:
            if arr[low] == target:
                return low
            return -1
        
        # Interpolation formula
        pos = low + int(((high - low) / (arr[high] - arr[low])) * (target - arr[low]))
        
        if arr[pos] == target:
            return pos
        elif arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1
    
    return -1`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">5. Exponential Search</h4>
          <p className="text-white-700 mb-2">
            Exponential search is useful for unbounded searches where the size of the array is infinite. It works by finding the range where the element is present, then applying binary search.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Time Complexity: O(log n)</li>
              <li>Space Complexity: O(1)</li>
              <li>Works for unbounded searches</li>
              <li>Requires sorted array</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def exponential_search(arr, target):
    if arr[0] == target:
        return 0
    
    # Find range for binary search
    i = 1
    n = len(arr)
    while i < n and arr[i] <= target:
        i = i * 2
    
    # Apply binary search in the found range
    return binary_search_recursive(arr, target, i // 2, min(i, n - 1))`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Comparison of Searching Algorithms</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 rounded-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-dark-600">Algorithm</th>
                  <th className="text-left p-3 text-dark-600">Best</th>
                  <th className="text-left p-3 text-dark-600">Average</th>
                  <th className="text-left p-3 text-dark-600">Worst</th>
                  <th className="text-left p-3 text-dark-600">Space</th>
                  <th className="text-left p-3 text-dark-600">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Linear Search</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">None</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Binary Search</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">Sorted</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Jump Search</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">O(√n)</td>
                  <td className="p-3 text-dark-600">O(√n)</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">Sorted</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Interpolation Search</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">O(log log n)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">Sorted, Uniform</td>
                </tr>
                <tr>
                  <td className="p-3 text-dark-600">Exponential Search</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">Sorted</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">When to Use Which Algorithm?</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1">
            <li><strong>Small unsorted arrays:</strong> Linear Search</li>
            <li><strong>Large sorted arrays:</strong> Binary Search</li>
            <li><strong>Uniformly distributed sorted data:</strong> Interpolation Search</li>
            <li><strong>Unbounded searches:</strong> Exponential Search</li>
            <li><strong>When you need to minimize comparisons:</strong> Jump Search</li>
            <li><strong>General purpose sorted search:</strong> Binary Search</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Practical Applications</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1">
            <li><strong>Database queries:</strong> Finding records efficiently</li>
            <li><strong>File systems:</strong> Locating files in directories</li>
            <li><strong>Web search:</strong> Finding relevant information</li>
            <li><strong>Game development:</strong> Finding game objects</li>
            <li><strong>Network routing:</strong> Finding optimal paths</li>
            <li><strong>Compilers:</strong> Symbol table lookups</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'trees',
    name: 'Step 6: Tree Data Structures',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 6: Tree Data Structures</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Introduction to Trees</h4>
          <p className="text-white-700 mb-4">
            A tree is a hierarchical data structure consisting of nodes connected by edges. Each node contains a value and references to other nodes (children). Trees are fundamental in computer science and are used in many applications.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Tree Terminology</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li><strong>Node:</strong> Each element in the tree</li>
              <li><strong>Root:</strong> The topmost node of the tree</li>
              <li><strong>Parent:</strong> A node that has children</li>
              <li><strong>Child:</strong> A node that has a parent</li>
              <li><strong>Leaf:</strong> A node with no children</li>
              <li><strong>Height:</strong> Length of the longest path from root to leaf</li>
              <li><strong>Depth:</strong> Length of path from root to a specific node</li>
              <li><strong>Degree:</strong> Number of children a node has</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">1. Binary Tree</h4>
          <p className="text-white-700 mb-2">
            A binary tree is a tree data structure where each node has at most two children, referred to as the left child and right child.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Each node has at most 2 children</li>
              <li>Left and right child distinction</li>
              <li>Can be empty (null tree)</li>
              <li>Base for many other tree structures</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None
    
    def insert(self, key):
        if not self.root:
            self.root = Node(key)
        else:
            self._insert_recursive(self.root, key)
    
    def _insert_recursive(self, node, key):
        if key < node.key:
            if node.left is None:
                node.left = Node(key)
            else:
                self._insert_recursive(node.left, key)
        else:
            if node.right is None:
                node.right = Node(key)
            else:
                self._insert_recursive(node.right, key)`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">2. Binary Search Tree (BST)</h4>
          <p className="text-white-700 mb-2">
            A binary search tree is a binary tree where for each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater than the node.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Properties:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Left subtree contains only nodes with keys &lt; node&apos;s key</li>
              <li>Right subtree contains only nodes with keys &gt; node&apos;s key</li>
              <li>Both left and right subtrees must also be BSTs</li>
              <li>Inorder traversal gives sorted order</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`class BST:
    def __init__(self):
        self.root = None
    
    def search(self, key):
        return self._search_recursive(self.root, key)
    
    def _search_recursive(self, node, key):
        if node is None or node.key == key:
            return node
        
        if key < node.key:
            return self._search_recursive(node.left, key)
        return self._search_recursive(node.right, key)
    
    def insert(self, key):
        self.root = self._insert_recursive(self.root, key)
    
    def _insert_recursive(self, node, key):
        if node is None:
            return Node(key)
        
        if key < node.key:
            node.left = self._insert_recursive(node.left, key)
        elif key > node.key:
            node.right = self._insert_recursive(node.right, key)
        
        return node`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">3. AVL Tree</h4>
          <p className="text-white-700 mb-2">
            An AVL tree is a self-balancing binary search tree where the heights of the left and right subtrees of every node differ by at most one.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Height-balanced tree</li>
              <li>Height difference ≤ 1 for all nodes</li>
              <li>Time Complexity: O(log n) for all operations</li>
              <li>Uses rotations to maintain balance</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`class AVLNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def get_height(self, node):
        if node is None:
            return 0
        return node.height
    
    def get_balance(self, node):
        if node is None:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)
    
    def right_rotate(self, y):
        x = y.left
        T2 = x.right
        
        x.right = y
        y.left = T2
        
        y.height = max(self.get_height(y.left), self.get_height(y.right)) + 1
        x.height = max(self.get_height(x.left), self.get_height(x.right)) + 1
        
        return x`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">4. B-Tree</h4>
          <p className="text-white-700 mb-2">
            A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Properties:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>All leaves are at the same level</li>
              <li>Each node contains multiple keys</li>
              <li>Used in databases and file systems</li>
              <li>Minimizes disk I/O operations</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">5. Heap</h4>
          <p className="text-white-700 mb-2">
            A heap is a specialized tree-based data structure that satisfies the heap property. In a max heap, for any given node, the value of the node is greater than or equal to the values of its children.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Types of Heaps:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Max Heap: Parent ≥ Children</li>
              <li>Min Heap: Parent ≤ Children</li>
              <li>Binary Heap: Complete binary tree</li>
              <li>Fibonacci Heap: Advanced heap structure</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`class MaxHeap:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i - 1) // 2
    
    def left_child(self, i):
        return 2 * i + 1
    
    def right_child(self, i):
        return 2 * i + 2
    
    def swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]
    
    def insert(self, key):
        self.heap.append(key)
        self._heapify_up(len(self.heap) - 1)
    
    def _heapify_up(self, i):
        parent = self.parent(i)
        if i > 0 and self.heap[i] > self.heap[parent]:
            self.swap(i, parent)
            self._heapify_up(parent)
    
    def extract_max(self):
        if len(self.heap) == 0:
            return None
        
        max_val = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        
        if len(self.heap) > 0:
            self._heapify_down(0)
        
        return max_val`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Tree Traversal Algorithms</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">1. Inorder Traversal (Left → Root → Right)</h5>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`def inorder_traversal(node):
    if node:
        inorder_traversal(node.left)
        print(node.key, end=" ")
        inorder_traversal(node.right)`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">2. Preorder Traversal (Root → Left → Right)</h5>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`def preorder_traversal(node):
    if node:
        print(node.key, end=" ")
        preorder_traversal(node.left)
        preorder_traversal(node.right)`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">3. Postorder Traversal (Left → Right → Root)</h5>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`def postorder_traversal(node):
    if node:
        postorder_traversal(node.left)
        postorder_traversal(node.right)
        print(node.key, end=" ")`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">4. Level Order Traversal (Breadth-First)</h5>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`from collections import deque

def level_order_traversal(root):
    if not root:
        return
    
    queue = deque([root])
    while queue:
        node = queue.popleft()
        print(node.key, end=" ")
        
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Comparison of Tree Types</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 rounded-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-dark-600">Tree Type</th>
                  <th className="text-left p-3 text-dark-600">Search</th>
                  <th className="text-left p-3 text-dark-600">Insert</th>
                  <th className="text-left p-3 text-dark-600">Delete</th>
                  <th className="text-left p-3 text-dark-600">Space</th>
                  <th className="text-left p-3 text-dark-600">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Binary Tree</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">General purpose</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">BST</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">Ordered data</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">AVL Tree</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">Balanced operations</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">B-Tree</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">Database systems</td>
                </tr>
                <tr>
                  <td className="p-3 text-dark-600">Heap</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">Priority queues</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Applications of Trees</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1">
            <li><strong>File systems:</strong> Directory structures</li>
            <li><strong>Database indexing:</strong> B-trees for efficient queries</li>
            <li><strong>Priority queues:</strong> Heaps for scheduling</li>
            <li><strong>Expression trees:</strong> Mathematical expressions</li>
            <li><strong>Decision trees:</strong> Machine learning algorithms</li>
            <li><strong>Syntax trees:</strong> Compiler design</li>
            <li><strong>Game trees:</strong> AI and game theory</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'graphs',
    name: 'Step 7: Graph Data Structures & Algorithms',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 7: Graph Data Structures & Algorithms</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Introduction to Graphs</h4>
          <p className="text-white-700 mb-4">
            A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. Graphs are used to represent relationships between objects and are fundamental in computer science.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Graph Terminology</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li><strong>Vertex (Node):</strong> A point in the graph</li>
              <li><strong>Edge:</strong> A connection between two vertices</li>
              <li><strong>Directed Graph:</strong> Edges have direction</li>
              <li><strong>Undirected Graph:</strong> Edges have no direction</li>
              <li><strong>Weighted Graph:</strong> Edges have weights/costs</li>
              <li><strong>Path:</strong> Sequence of vertices connected by edges</li>
              <li><strong>Cycle:</strong> Path that starts and ends at the same vertex</li>
              <li><strong>Degree:</strong> Number of edges connected to a vertex</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Graph Representations</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">1. Adjacency Matrix</h5>
              <p className="text-dark-600 text-sm mb-2">A 2D array where matrix[i][j] indicates if there's an edge from vertex i to vertex j.</p>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`class Graph:
    def __init__(self, vertices):
        self.vertices = vertices
        self.matrix = [[0] * vertices for _ in range(vertices)]
    
    def add_edge(self, u, v, weight=1):
        self.matrix[u][v] = weight
        # For undirected graph, also add edge from v to u
        self.matrix[v][u] = weight
    
    def remove_edge(self, u, v):
        self.matrix[u][v] = 0
        self.matrix[v][u] = 0
    
    def has_edge(self, u, v):
        return self.matrix[u][v] != 0`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">2. Adjacency List</h5>
              <p className="text-dark-600 text-sm mb-2">An array of lists where each list represents the neighbors of a vertex.</p>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    
    def add_edge(self, u, v, weight=1):
        self.graph[u].append((v, weight))
        # For undirected graph
        self.graph[v].append((u, weight))
    
    def get_neighbors(self, vertex):
        return self.graph[vertex]
    
    def get_vertices(self):
        return list(self.graph.keys())`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Graph Traversal Algorithms</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">1. Depth-First Search (DFS)</h5>
              <p className="text-dark-600 text-sm mb-2">Explores as far as possible along each branch before backtracking.</p>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`def dfs_recursive(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start, end=" ")
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)

def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    
    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.add(vertex)
            print(vertex, end=" ")
            
            # Add unvisited neighbors to stack
            for neighbor in reversed(graph[vertex]):
                if neighbor not in visited:
                    stack.append(neighbor)`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">2. Breadth-First Search (BFS)</h5>
              <p className="text-dark-600 text-sm mb-2">Explores all neighbors at the present depth before moving to nodes at the next depth level.</p>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        print(vertex, end=" ")
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Shortest Path Algorithms</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">1. Dijkstra's Algorithm</h5>
              <p className="text-dark-600 text-sm mb-2">Finds the shortest path from a source vertex to all other vertices in a weighted graph.</p>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`import heapq

def dijkstra(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_distance, current_vertex = heapq.heappop(pq)
        
        if current_distance > distances[current_vertex]:
            continue
        
        for neighbor, weight in graph[current_vertex]:
            distance = current_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">2. Bellman-Ford Algorithm</h5>
              <p className="text-dark-600 text-sm mb-2">Finds shortest paths from a source vertex to all other vertices, can handle negative weights.</p>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`def bellman_ford(graph, start, V):
    distances = [float('infinity')] * V
    distances[start] = 0
    
    # Relax all edges V-1 times
    for _ in range(V - 1):
        for u, v, w in graph:
            if distances[u] != float('infinity') and distances[u] + w < distances[v]:
                distances[v] = distances[u] + w
    
    # Check for negative weight cycles
    for u, v, w in graph:
        if distances[u] != float('infinity') and distances[u] + w < distances[v]:
            print("Graph contains negative weight cycle")
            return None
    
    return distances`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">3. Floyd-Warshall Algorithm</h5>
              <p className="text-dark-600 text-sm mb-2">Finds shortest paths between all pairs of vertices in a weighted graph.</p>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`def floyd_warshall(graph, V):
    dist = [[float('infinity')] * V for _ in range(V)]
    
    # Initialize distances
    for i in range(V):
        dist[i][i] = 0
        for j, weight in graph[i]:
            dist[i][j] = weight
    
    # Floyd-Warshall algorithm
    for k in range(V):
        for i in range(V):
            for j in range(V):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    return dist`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Minimum Spanning Tree Algorithms</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">1. Kruskal's Algorithm</h5>
              <p className="text-dark-600 text-sm mb-2">Finds a minimum spanning tree by sorting edges and adding them if they don't form a cycle.</p>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return False
        
        if self.rank[px] < self.rank[py]:
            self.parent[px] = py
        elif self.rank[px] > self.rank[py]:
            self.parent[py] = px
        else:
            self.parent[py] = px
            self.rank[px] += 1
        return True

def kruskal(edges, V):
    edges.sort(key=lambda x: x[2])  # Sort by weight
    uf = UnionFind(V)
    mst = []
    
    for u, v, weight in edges:
        if uf.union(u, v):
            mst.append((u, v, weight))
    
    return mst`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">2. Prim's Algorithm</h5>
              <p className="text-dark-600 text-sm mb-2">Finds a minimum spanning tree by growing the tree one vertex at a time.</p>
              <pre className="text-sm text-dark-600 overflow-x-auto">
{`import heapq

def prim(graph, start, V):
    visited = [False] * V
    mst = []
    pq = [(0, start, -1)]  # (weight, vertex, parent)
    
    while pq and len(mst) < V - 1:
        weight, vertex, parent = heapq.heappop(pq)
        
        if visited[vertex]:
            continue
        
        visited[vertex] = True
        if parent != -1:
            mst.append((parent, vertex, weight))
        
        for neighbor, edge_weight in graph[vertex]:
            if not visited[neighbor]:
                heapq.heappush(pq, (edge_weight, neighbor, vertex))
    
    return mst`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Topological Sorting</h4>
          <p className="text-white-700 mb-2">
            Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge (u, v), vertex u comes before vertex v.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def topological_sort(graph):
    def dfs(vertex):
        visited.add(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                dfs(neighbor)
        result.append(vertex)
    
    visited = set()
    result = []
    
    for vertex in graph:
        if vertex not in visited:
            dfs(vertex)
    
    return result[::-1]  # Reverse to get topological order`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Comparison of Graph Algorithms</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 rounded-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-dark-600">Algorithm</th>
                  <th className="text-left p-3 text-dark-600">Time Complexity</th>
                  <th className="text-left p-3 text-dark-600">Space Complexity</th>
                  <th className="text-left p-3 text-dark-600">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">DFS</td>
                  <td className="p-3 text-dark-600">O(V + E)</td>
                  <td className="p-3 text-dark-600">O(V)</td>
                  <td className="p-3 text-dark-600">Path finding, cycle detection</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">BFS</td>
                  <td className="p-3 text-dark-600">O(V + E)</td>
                  <td className="p-3 text-dark-600">O(V)</td>
                  <td className="p-3 text-dark-600">Shortest path (unweighted)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Dijkstra</td>
                  <td className="p-3 text-dark-600">O((V + E) log V)</td>
                  <td className="p-3 text-dark-600">O(V)</td>
                  <td className="p-3 text-dark-600">Shortest path (positive weights)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Bellman-Ford</td>
                  <td className="p-3 text-dark-600">O(VE)</td>
                  <td className="p-3 text-dark-600">O(V)</td>
                  <td className="p-3 text-dark-600">Shortest path (negative weights)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Floyd-Warshall</td>
                  <td className="p-3 text-dark-600">O(V³)</td>
                  <td className="p-3 text-dark-600">O(V²)</td>
                  <td className="p-3 text-dark-600">All pairs shortest path</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Kruskal</td>
                  <td className="p-3 text-dark-600">O(E log E)</td>
                  <td className="p-3 text-dark-600">O(V)</td>
                  <td className="p-3 text-dark-600">Minimum spanning tree</td>
                </tr>
                <tr>
                  <td className="p-3 text-dark-600">Prim</td>
                  <td className="p-3 text-dark-600">O(E log V)</td>
                  <td className="p-3 text-dark-600">O(V)</td>
                  <td className="p-3 text-dark-600">Minimum spanning tree</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Applications of Graphs</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1">
            <li><strong>Social networks:</strong> Friend connections and recommendations</li>
            <li><strong>Navigation systems:</strong> Finding shortest routes</li>
            <li><strong>Computer networks:</strong> Network topology and routing</li>
            <li><strong>Dependency resolution:</strong> Build systems and package managers</li>
            <li><strong>Game development:</strong> AI pathfinding and game maps</li>
            <li><strong>Circuit design:</strong> Electronic circuit layout</li>
            <li><strong>Biology:</strong> Protein interaction networks</li>
            <li><strong>Recommendation systems:</strong> User-item relationships</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'advanced-ds',
    name: 'Step 8: Advanced Data Structures',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 8: Advanced Data Structures</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Introduction to Advanced Data Structures</h4>
          <p className="text-white-700 mb-4">
            Advanced data structures are specialized structures designed for specific use cases and problems. They often provide efficient solutions for complex operations that basic data structures cannot handle efficiently.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">1. Trie (Prefix Tree)</h4>
          <p className="text-white-700 mb-2">
            A trie is a tree-like data structure used to store and retrieve strings. It's particularly efficient for prefix-based operations and autocomplete functionality.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Each node represents a character</li>
              <li>Path from root to leaf represents a string</li>
              <li>Efficient for prefix searches</li>
              <li>Space complexity: O(ALPHABET_SIZE * N * M)</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word
    
    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">2. Segment Tree</h4>
          <p className="text-white-700 mb-2">
            A segment tree is a tree data structure used for storing information about intervals or segments. It allows querying which of the stored segments contain a given point.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Operations:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Range Sum Query: O(log n)</li>
              <li>Range Minimum Query: O(log n)</li>
              <li>Point Update: O(log n)</li>
              <li>Range Update: O(log n)</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n - 1)
    
    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            self.build(arr, 2 * node + 1, start, mid)
            self.build(arr, 2 * node + 2, mid + 1, end)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]
    
    def query(self, node, start, end, l, r):
        if r < start or l > end:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        
        mid = (start + end) // 2
        left = self.query(2 * node + 1, start, mid, l, r)
        right = self.query(2 * node + 2, mid + 1, end, l, r)
        return left + right
    
    def update(self, node, start, end, idx, val):
        if start == end:
            self.tree[node] = val
        else:
            mid = (start + end) // 2
            if idx <= mid:
                self.update(2 * node + 1, start, mid, idx, val)
            else:
                self.update(2 * node + 2, mid + 1, end, idx, val)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">3. Fenwick Tree (Binary Indexed Tree)</h4>
          <p className="text-white-700 mb-2">
            A Fenwick tree is a data structure that can efficiently update elements and calculate prefix sums in a table of numbers.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Space complexity: O(n)</li>
              <li>Update: O(log n)</li>
              <li>Prefix Sum: O(log n)</li>
              <li>Uses bit manipulation for efficiency</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`class FenwickTree:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)
    
    def update(self, idx, val):
        while idx <= self.n:
            self.tree[idx] += val
            idx += idx & -idx  # Add least significant bit
    
    def query(self, idx):
        result = 0
        while idx > 0:
            result += self.tree[idx]
            idx -= idx & -idx  # Remove least significant bit
        return result
    
    def range_query(self, l, r):
        return self.query(r) - self.query(l - 1)

# Example usage
arr = [1, 3, 5, 7, 9, 11]
ft = FenwickTree(len(arr))
for i, val in enumerate(arr, 1):
    ft.update(i, val)
print(ft.range_query(2, 4))  # Sum of elements from index 2 to 4`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">4. Disjoint Set Union (DSU)</h4>
          <p className="text-white-700 mb-2">
            DSU is a data structure that tracks a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Operations:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Make Set: O(1)</li>
              <li>Find: O(α(n)) amortized</li>
              <li>Union: O(α(n)) amortized</li>
              <li>Uses path compression and union by rank</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return
        
        # Union by rank
        if self.rank[px] < self.rank[py]:
            self.parent[px] = py
        elif self.rank[px] > self.rank[py]:
            self.parent[py] = px
        else:
            self.parent[py] = px
            self.rank[px] += 1
    
    def connected(self, x, y):
        return self.find(x) == self.find(y)

# Example: Kruskal's algorithm using DSU
def kruskal(edges, n):
    dsu = DSU(n)
    edges.sort(key=lambda x: x[2])  # Sort by weight
    mst = []
    
    for u, v, weight in edges:
        if not dsu.connected(u, v):
            dsu.union(u, v)
            mst.append((u, v, weight))
    
    return mst`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">5. Sparse Table</h4>
          <p className="text-white-700 mb-2">
            A sparse table is a data structure that allows answering range queries on static arrays in O(1) time after O(n log n) preprocessing.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Use Cases:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Range Minimum Query (RMQ)</li>
              <li>Range Maximum Query</li>
              <li>Range GCD Query</li>
              <li>Static array queries</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`import math

class SparseTable:
    def __init__(self, arr):
        self.n = len(arr)
        self.k = math.floor(math.log2(self.n)) + 1
        self.st = [[0] * self.k for _ in range(self.n)]
        
        # Initialize first column
        for i in range(self.n):
            self.st[i][0] = arr[i]
        
        # Build sparse table
        for j in range(1, self.k):
            for i in range(self.n - (1 << j) + 1):
                self.st[i][j] = min(self.st[i][j-1], 
                                   self.st[i + (1 << (j-1))][j-1])
    
    def query(self, l, r):
        j = math.floor(math.log2(r - l + 1))
        return min(self.st[l][j], self.st[r - (1 << j) + 1][j])

# Example usage
arr = [7, 2, 3, 0, 5, 10, 3, 12, 18]
st = SparseTable(arr)
print(st.query(0, 4))  # Minimum in range [0, 4]
print(st.query(4, 7))  # Minimum in range [4, 7]`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">6. Suffix Array</h4>
          <p className="text-white-700 mb-2">
            A suffix array is a sorted array of all suffixes of a string. It's used for efficient string matching and pattern searching.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Applications:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Pattern matching in strings</li>
              <li>Longest common substring</li>
              <li>String compression</li>
              <li>Bioinformatics</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`def build_suffix_array(s):
    n = len(s)
    suffixes = []
    
    # Generate all suffixes
    for i in range(n):
        suffixes.append((s[i:], i))
    
    # Sort suffixes lexicographically
    suffixes.sort()
    
    # Extract indices
    suffix_array = [suffix[1] for suffix in suffixes]
    return suffix_array

def search_pattern(text, pattern, suffix_array):
    n = len(text)
    m = len(pattern)
    
    # Binary search in suffix array
    left, right = 0, n - 1
    while left <= right:
        mid = (left + right) // 2
        suffix = text[suffix_array[mid]:suffix_array[mid] + m]
        
        if suffix == pattern:
            return suffix_array[mid]
        elif suffix < pattern:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Example usage
text = "banana"
suffix_array = build_suffix_array(text)
print("Suffix Array:", suffix_array)
print("Pattern 'ana' found at:", search_pattern(text, "ana", suffix_array))`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Comparison of Advanced Data Structures</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 rounded-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-dark-600">Data Structure</th>
                  <th className="text-left p-3 text-dark-600">Space</th>
                  <th className="text-left p-3 text-dark-600">Insert</th>
                  <th className="text-left p-3 text-dark-600">Search</th>
                  <th className="text-left p-3 text-dark-600">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Trie</td>
                  <td className="p-3 text-dark-600">O(ALPHABET_SIZE * N * M)</td>
                  <td className="p-3 text-dark-600">O(M)</td>
                  <td className="p-3 text-dark-600">O(M)</td>
                  <td className="p-3 text-dark-600">String operations, autocomplete</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Segment Tree</td>
                  <td className="p-3 text-dark-600">O(N)</td>
                  <td className="p-3 text-dark-600">O(log N)</td>
                  <td className="p-3 text-dark-600">O(log N)</td>
                  <td className="p-3 text-dark-600">Range queries, updates</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Fenwick Tree</td>
                  <td className="p-3 text-dark-600">O(N)</td>
                  <td className="p-3 text-dark-600">O(log N)</td>
                  <td className="p-3 text-dark-600">O(log N)</td>
                  <td className="p-3 text-dark-600">Prefix sums, point updates</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">DSU</td>
                  <td className="p-3 text-dark-600">O(N)</td>
                  <td className="p-3 text-dark-600">O(α(N))</td>
                  <td className="p-3 text-dark-600">O(α(N))</td>
                  <td className="p-3 text-dark-600">Connected components, MST</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Sparse Table</td>
                  <td className="p-3 text-dark-600">O(N log N)</td>
                  <td className="p-3 text-dark-600">O(N log N)</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">Static range queries</td>
                </tr>
                <tr>
                  <td className="p-3 text-dark-600">Suffix Array</td>
                  <td className="p-3 text-dark-600">O(N)</td>
                  <td className="p-3 text-dark-600">O(N log N)</td>
                  <td className="p-3 text-dark-600">O(M log N)</td>
                  <td className="p-3 text-dark-600">String matching, bioinformatics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">When to Use Which Data Structure?</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1">
            <li><strong>String operations and autocomplete:</strong> Trie</li>
            <li><strong>Range queries with updates:</strong> Segment Tree</li>
            <li><strong>Prefix sums and point updates:</strong> Fenwick Tree</li>
            <li><strong>Connected components and MST:</strong> DSU</li>
            <li><strong>Static range queries:</strong> Sparse Table</li>
            <li><strong>String matching and pattern search:</strong> Suffix Array</li>
            <li><strong>Multiple range operations:</strong> Segment Tree with lazy propagation</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Real-World Applications</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1">
            <li><strong>Search engines:</strong> Tries for autocomplete</li>
            <li><strong>Database systems:</strong> Segment trees for range queries</li>
            <li><strong>Network routing:</strong> DSU for connected components</li>
            <li><strong>Bioinformatics:</strong> Suffix arrays for DNA sequence analysis</li>
            <li><strong>Game development:</strong> Sparse tables for static data</li>
            <li><strong>Financial systems:</strong> Fenwick trees for prefix sums</li>
            <li><strong>Compilers:</strong> Tries for symbol tables</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'problem-solving',
    name: 'Step 9: Problem Solving Techniques',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 9: Problem Solving Techniques</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Introduction to Algorithmic Paradigms</h4>
          <p className="text-white-700 mb-4">
            Algorithmic paradigms are general approaches to solving computational problems. Understanding these paradigms helps in choosing the right strategy for a given problem and developing efficient solutions.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">1. Brute Force</h4>
          <p className="text-white-700 mb-2">
            Brute force is the simplest approach where we try all possible solutions to find the correct one. It's often used when the problem size is small or as a baseline for comparison.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Characteristics:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Simple to implement and understand</li>
              <li>Guaranteed to find the correct solution</li>
              <li>Often inefficient for large inputs</li>
              <li>Good for small problem sizes</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`# Example: Finding all pairs that sum to target
def find_pairs_brute_force(arr, target):
    pairs = []
    n = len(arr)
    
    for i in range(n):
        for j in range(i + 1, n):
            if arr[i] + arr[j] == target:
                pairs.append((arr[i], arr[j]))
    
    return pairs

# Example: Subset Sum Problem
def subset_sum_brute_force(arr, target):
    n = len(arr)
    
    # Try all possible subsets
    for i in range(1 << n):  # 2^n possibilities
        subset_sum = 0
        for j in range(n):
            if i & (1 << j):  # Check if j-th bit is set
                subset_sum += arr[j]
        if subset_sum == target:
            return True
    
    return False`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">2. Backtracking</h4>
          <p className="text-white-700 mb-2">
            Backtracking is a systematic way to iterate through all possible configurations of a search space. It builds solutions incrementally and abandons partial solutions that cannot lead to a valid solution.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Key Concepts:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>State space tree exploration</li>
              <li>Pruning invalid branches</li>
              <li>Recursive implementation</li>
              <li>Constraint satisfaction</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`# N-Queens Problem
def solve_n_queens(n):
    def is_safe(board, row, col):
        # Check row
        for j in range(col):
            if board[row][j] == 'Q':
                return False
        
        # Check upper diagonal
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 'Q':
                return False
        
        # Check lower diagonal
        for i, j in zip(range(row, n, 1), range(col, -1, -1)):
            if board[i][j] == 'Q':
                return False
        
        return True
    
    def solve(board, col):
        if col >= n:
            return True
        
        for row in range(n):
            if is_safe(board, row, col):
                board[row][col] = 'Q'
                
                if solve(board, col + 1):
                    return True
                
                board[row][col] = '.'  # Backtrack
        
        return False
    
    board = [['.' for _ in range(n)] for _ in range(n)]
    if solve(board, 0):
        return board
    return None

# Sudoku Solver
def solve_sudoku(board):
    def is_valid(board, row, col, num):
        # Check row
        for x in range(9):
            if board[row][x] == num:
                return False
        
        # Check column
        for x in range(9):
            if board[x][col] == num:
                return False
        
        # Check 3x3 box
        start_row, start_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(3):
            for j in range(3):
                if board[i + start_row][j + start_col] == num:
                    return False
        
        return True
    
    def solve():
        for row in range(9):
            for col in range(9):
                if board[row][col] == '.':
                    for num in '123456789':
                        if is_valid(board, row, col, num):
                            board[row][col] = num
                            if solve():
                                return True
                            board[row][col] = '.'  # Backtrack
                    return False
        return True
    
    solve()
    return board`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">3. Greedy Algorithms</h4>
          <p className="text-white-700 mb-2">
            Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum. They are simple and often efficient but don't always guarantee the optimal solution.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">When to Use:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Optimization problems</li>
              <li>When local optimal choice leads to global optimal</li>
              <li>When exact solution is not required</li>
              <li>When speed is more important than accuracy</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`# Activity Selection Problem
def activity_selection(start, finish):
    n = len(start)
    selected = [0]  # First activity is always selected
    j = 0
    
    for i in range(1, n):
        if start[i] >= finish[j]:
            selected.append(i)
            j = i
    
    return selected

# Fractional Knapsack
def fractional_knapsack(values, weights, capacity):
    n = len(values)
    items = [(values[i], weights[i], values[i]/weights[i]) for i in range(n)]
    items.sort(key=lambda x: x[2], reverse=True)  # Sort by value/weight ratio
    
    total_value = 0
    remaining_capacity = capacity
    
    for value, weight, ratio in items:
        if remaining_capacity >= weight:
            total_value += value
            remaining_capacity -= weight
        else:
            total_value += ratio * remaining_capacity
            break
    
    return total_value

# Huffman Coding
import heapq

class HuffmanNode:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None
    
    def __lt__(self, other):
        return self.freq < other.freq

def build_huffman_tree(characters, frequencies):
    heap = [HuffmanNode(char, freq) for char, freq in zip(characters, frequencies)]
    heapq.heapify(heap)
    
    while len(heap) > 1:
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)
        
        internal = HuffmanNode(None, left.freq + right.freq)
        internal.left = left
        internal.right = right
        
        heapq.heappush(heap, internal)
    
    return heap[0]`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">4. Divide and Conquer</h4>
          <p className="text-white-700 mb-2">
            Divide and conquer breaks down a problem into smaller subproblems, solves them recursively, and combines the solutions to solve the original problem.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Steps:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Divide: Break the problem into smaller subproblems</li>
              <li>Conquer: Solve the subproblems recursively</li>
              <li>Combine: Merge the solutions of subproblems</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`# Merge Sort
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Quick Sort
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# Binary Search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Closest Pair of Points
import math

def closest_pair(points):
    n = len(points)
    if n <= 3:
        return min_distance_brute_force(points)
    
    # Sort points by x-coordinate
    points.sort(key=lambda p: p[0])
    mid = n // 2
    mid_x = points[mid][0]
    
    # Divide
    left_points = points[:mid]
    right_points = points[mid:]
    
    # Conquer
    left_min = closest_pair(left_points)
    right_min = closest_pair(right_points)
    
    # Combine
    min_dist = min(left_min, right_min)
    
    # Check for points in the strip
    strip = [p for p in points if abs(p[0] - mid_x) < min_dist]
    strip.sort(key=lambda p: p[1])
    
    for i in range(len(strip)):
        for j in range(i + 1, min(i + 7, len(strip))):
            dist = distance(strip[i], strip[j])
            min_dist = min(min_dist, dist)
    
    return min_dist

def distance(p1, p2):
    return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)

def min_distance_brute_force(points):
    min_dist = float('inf')
    for i in range(len(points)):
        for j in range(i + 1, len(points)):
            min_dist = min(min_dist, distance(points[i], points[j]))
    return min_dist`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">5. Dynamic Programming</h4>
          <p className="text-white-700 mb-2">
            Dynamic programming solves complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Key Principles:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Optimal substructure</li>
              <li>Overlapping subproblems</li>
              <li>Memoization or tabulation</li>
              <li>State definition and transitions</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`# Fibonacci with Memoization
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

# Longest Common Subsequence
def lcs(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

# 0/1 Knapsack Problem
def knapsack_01(values, weights, capacity):
    n = len(values)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], dp[i-1][w - weights[i-1]] + values[i-1])
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]

# Edit Distance
def edit_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Initialize first row and column
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    
    return dp[m][n]

# Coin Change
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">6. Two Pointer Technique</h4>
          <p className="text-white-700 mb-2">
            The two pointer technique uses two pointers to traverse data structures, often arrays or linked lists, to solve problems efficiently.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Use Cases:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Finding pairs in sorted arrays</li>
              <li>Removing duplicates</li>
              <li>Palindrome checking</li>
              <li>Container with most water</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`# Two Sum in Sorted Array
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return [-1, -1]

# Remove Duplicates from Sorted Array
def remove_duplicates(arr):
    if not arr:
        return 0
    
    write_index = 1
    for read_index in range(1, len(arr)):
        if arr[read_index] != arr[read_index - 1]:
            arr[write_index] = arr[read_index]
            write_index += 1
    
    return write_index

# Container With Most Water
def max_area(height):
    left, right = 0, len(height) - 1
    max_area = 0
    
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_area = max(max_area, width * h)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_area

# Valid Palindrome
def is_palindrome(s):
    left, right = 0, len(s) - 1
    
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1
    
    return True`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">7. Sliding Window</h4>
          <p className="text-white-700 mb-2">
            The sliding window technique maintains a subset of elements that satisfies certain conditions by expanding and contracting the window.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-3">
            <p className="text-sm text-dark-600 mb-2">Types:</p>
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li>Fixed-size window</li>
              <li>Variable-size window</li>
              <li>Two-pointer window</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-dark-600 overflow-x-auto">
{`# Maximum Sum Subarray of Size K
def max_sum_subarray(arr, k):
    if len(arr) < k:
        return -1
    
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i - k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

# Longest Substring Without Repeating Characters
def length_of_longest_substring(s):
    char_map = {}
    left = 0
    max_length = 0
    
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        char_map[char] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Minimum Window Substring
def min_window(s, t):
    if not t or not s:
        return ""
    
    target_count = {}
    for char in t:
        target_count[char] = target_count.get(char, 0) + 1
    
    required = len(target_count)
    formed = 0
    window_count = {}
    
    left = 0
    min_len = float('inf')
    min_start = 0
    
    for right, char in enumerate(s):
        window_count[char] = window_count.get(char, 0) + 1
        
        if char in target_count and window_count[char] == target_count[char]:
            formed += 1
        
        while left <= right and formed == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_start = left
            
            window_count[s[left]] -= 1
            if s[left] in target_count and window_count[s[left]] < target_count[s[left]]:
                formed -= 1
            
            left += 1
    
    return s[min_start:min_start + min_len] if min_len != float('inf') else ""`}
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Comparison of Problem Solving Techniques</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 rounded-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-dark-600">Technique</th>
                  <th className="text-left p-3 text-dark-600">Time Complexity</th>
                  <th className="text-left p-3 text-dark-600">Space Complexity</th>
                  <th className="text-left p-3 text-dark-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Brute Force</td>
                  <td className="p-3 text-dark-600">O(2^n) - O(n!)</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">Small problems, baseline</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Backtracking</td>
                  <td className="p-3 text-dark-600">O(b^d)</td>
                  <td className="p-3 text-dark-600">O(d)</td>
                  <td className="p-3 text-dark-600">Constraint satisfaction</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Greedy</td>
                  <td className="p-3 text-dark-600">O(n log n)</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">Optimization problems</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Divide & Conquer</td>
                  <td className="p-3 text-dark-600">O(n log n)</td>
                  <td className="p-3 text-dark-600">O(log n)</td>
                  <td className="p-3 text-dark-600">Sorting, searching</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Dynamic Programming</td>
                  <td className="p-3 text-dark-600">O(n²) - O(n³)</td>
                  <td className="p-3 text-dark-600">O(n) - O(n²)</td>
                  <td className="p-3 text-dark-600">Optimization, counting</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-dark-600">Two Pointers</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">O(1)</td>
                  <td className="p-3 text-dark-600">Array manipulation</td>
                </tr>
                <tr>
                  <td className="p-3 text-dark-600">Sliding Window</td>
                  <td className="p-3 text-dark-600">O(n)</td>
                  <td className="p-3 text-dark-600">O(k)</td>
                  <td className="p-3 text-dark-600">Subarray problems</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Problem-Solving Strategy</h4>
          <ol className="list-decimal list-inside text-white-700 space-y-2">
            <li><strong>Understand the problem:</strong> Read carefully, identify inputs, outputs, and constraints</li>
            <li><strong>Identify the pattern:</strong> Look for common algorithmic paradigms</li>
            <li><strong>Design the algorithm:</strong> Choose the appropriate technique</li>
            <li><strong>Analyze complexity:</strong> Consider time and space requirements</li>
            <li><strong>Implement:</strong> Write clean, efficient code</li>
            <li><strong>Test:</strong> Verify with edge cases and examples</li>
            <li><strong>Optimize:</strong> Look for improvements if needed</li>
          </ol>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Common Problem Patterns</h4>
          <ul className="list-disc list-inside text-white-700 space-y-1">
            <li><strong>Array problems:</strong> Two pointers, sliding window, prefix sums</li>
            <li><strong>String problems:</strong> Two pointers, dynamic programming, trie</li>
            <li><strong>Tree problems:</strong> DFS, BFS, recursion, dynamic programming</li>
            <li><strong>Graph problems:</strong> DFS, BFS, shortest path, minimum spanning tree</li>
            <li><strong>Optimization problems:</strong> Greedy, dynamic programming, binary search</li>
            <li><strong>Search problems:</strong> Binary search, backtracking, BFS</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'practice',
    name: 'Step 10: Practice, Practice, Practice!',
    content: (
      <>
        <h3 className="text-xl font-medium mb-4">Step 10: Practice, Practice, Practice!</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">The Importance of Practice</h4>
          <p className="text-white-700 mb-4">
            Consistent practice is the key to mastering data structures and algorithms. Regular problem-solving helps reinforce concepts, improve pattern recognition, and develop intuition for choosing the right approach.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Recommended Practice Platforms</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">1. LeetCode</h5>
              <p className="text-dark-600 text-sm mb-2">The most popular platform for coding interviews and DSA practice.</p>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>1500+ problems with varying difficulty</li>
                <li>Company-specific question lists</li>
                <li>Weekly contests and challenges</li>
                <li>Detailed solutions and discussions</li>
                <li>Progress tracking and streak maintenance</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">2. HackerRank</h5>
              <p className="text-dark-600 text-sm mb-2">Great for beginners with structured learning paths.</p>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>Data Structures and Algorithms tracks</li>
                <li>Problem-solving tutorials</li>
                <li>Skill assessments and certifications</li>
                <li>Company coding challenges</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">3. Codeforces</h5>
              <p className="text-dark-600 text-sm mb-2">Advanced platform for competitive programming.</p>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>Regular contests and competitions</li>
                <li>Complex algorithmic problems</li>
                <li>Rating system and rankings</li>
                <li>Educational rounds for learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Problem Categories by Difficulty</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Beginner (Easy)</h5>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>Basic array and string manipulation</li>
                <li>Simple loops and conditionals</li>
                <li>Basic sorting and searching</li>
                <li>Elementary math problems</li>
                <li>Simple data structure operations</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Intermediate (Medium)</h5>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>Two pointer techniques</li>
                <li>Sliding window problems</li>
                <li>Basic dynamic programming</li>
                <li>Tree and graph traversal</li>
                <li>Greedy algorithms</li>
                <li>Binary search variations</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Advanced (Hard)</h5>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>Complex dynamic programming</li>
                <li>Advanced graph algorithms</li>
                <li>Segment trees and advanced DS</li>
                <li>String algorithms</li>
                <li>Optimization problems</li>
                <li>Competitive programming problems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Practice Strategy</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Daily Practice Routine</h5>
              <ol className="list-decimal list-inside text-dark-600 text-sm space-y-1">
                <li><strong>Warm-up (15 minutes):</strong> Solve 1-2 easy problems</li>
                <li><strong>Main practice (45 minutes):</strong> Focus on medium problems</li>
                <li><strong>Challenge (30 minutes):</strong> Attempt 1 hard problem</li>
                <li><strong>Review (15 minutes):</strong> Analyze solutions and learn</li>
              </ol>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Weekly Goals</h5>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>Solve 20-30 problems per week</li>
                <li>Participate in 1-2 contests</li>
                <li>Review 5-10 previously solved problems</li>
                <li>Learn 1-2 new algorithms/concepts</li>
                <li>Practice mock interviews</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Learning Resources</h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Books</h5>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>"Introduction to Algorithms" by CLRS</li>
                <li>"Algorithm Design Manual" by Steven Skiena</li>
                <li>"Cracking the Coding Interview" by Gayle McDowell</li>
                <li>"Competitive Programming" by Steven Halim</li>
                <li>"Grokking Algorithms" by Aditya Bhargava</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-dark-600 mb-2">Online Courses</h5>
              <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
                <li>MIT OpenCourseWare - Introduction to Algorithms</li>
                <li>Stanford CS161 - Design and Analysis of Algorithms</li>
                <li>Coursera - Algorithms Part I & II (Princeton)</li>
                <li>edX - Algorithms and Data Structures</li>
                <li>Udemy - Master the Coding Interview</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Success Metrics</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <ul className="list-disc list-inside text-dark-600 text-sm space-y-1">
              <li><strong>Beginner:</strong> 100+ problems solved, comfortable with easy problems</li>
              <li><strong>Intermediate:</strong> 300+ problems solved, can solve most medium problems</li>
              <li><strong>Advanced:</strong> 500+ problems solved, comfortable with hard problems</li>
              <li><strong>Expert:</strong> 1000+ problems solved, can solve complex algorithmic challenges</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'dsa-blog',
    name: 'DSA Blog',
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-4">DSA Blog</h2>
        <p className="text-white-700">
          Welcome to the DSA blog! Here you will find articles, tutorials, and insights into various Data Structures and Algorithms.
          Stay tuned for more updates and detailed explanations.
        </p>
        {/* You can add more blog posts here */}
        <div className="mt-6 p-4 border rounded-lg shadow-sm">
          <h3 className="text-xl font-medium mb-2">Upcoming Article: Deep Dive into Dynamic Programming</h3>
          <p className="text-white-600 text-sm">
            Date: July 26, 2025
          </p>
          <p className="text-white-700 mt-2">
            This article will cover the core concepts of Dynamic Programming, common patterns, and examples to help you master this powerful technique.
          </p>
        </div>
      </>
    ),
  },
];

const DsaRoadmapPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentTopic = topics.find((topic) => topic.id === selectedTopic);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden bg-blue-600 text-white p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">DSA Roadmap</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className={`
          ${sidebarOpen ? 'fixed inset-y-0 left-0 z-50' : 'hidden'} 
          lg:relative lg:block 
          w-full lg:w-80 
          bg-gray-50 
          border-r border-gray-200 
          lg:min-h-screen
          lg:z-auto
        `}>
          <DsaSidebar 
            topics={topics} 
            onSelectTopic={(topic) => {
              setSelectedTopic(topic);
              setSidebarOpen(false); // Close sidebar on mobile after selection
            }} 
            selectedTopic={selectedTopic} 
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Desktop Header */}
          <div className="hidden lg:block mb-8">
            <h1 className="text-3xl font-bold text-center text-gray-800">Data Structures & Algorithms Roadmap</h1>
          </div>

          {/* Content Section */}
          <section className="max-w-4xl mx-auto">
            {currentTopic ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
                <div className="prose prose-sm lg:prose-base max-w-none">
                  {React.cloneElement(currentTopic.content, {
                    className: "text-sm lg:text-base"
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-sm lg:text-base">Select a topic from the sidebar to get started.</p>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DsaRoadmapPage;
