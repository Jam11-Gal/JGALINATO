let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                console.log(`Swapped ${arr[i]} and ${arr[i+1]}`);
            }
        }
        len--;
    } while (swapped);
    return arr;
}

let sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);
