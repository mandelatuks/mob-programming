function reversePrint(head) {
  // Write your code here
  let output = [];
  let currentNode = head;
  while (currentNode != null) {
    output.push(currentNode.data);
    currentNode = currentNode.next;
  }
  for (let i = output.length - 1; i >= 0; i--) {
    console.log(output[i]);
  }
}

// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem?isFullScreen=true