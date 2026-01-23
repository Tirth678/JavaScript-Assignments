// 1. **Sum values in object arrays**
//     - Input:
        
//         ```jsx
//         { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { food: 60, travel: 20, bills: 100 }
//         ```
let total = 0
let foodList = 
    {
        food: [10,20,30],
        travel: [5,15],
        bills: [40,60]
    }


let totalAmount = 0;

for (let i = 0; i < foodList.length; i++) {
    totalAmount += foodList[i].food
}

console.log(totalAmount); // Output: 150