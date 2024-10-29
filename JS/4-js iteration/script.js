let originalProducts = [
    {
                "id": 4,
                "supplierId": 2,
                "categoryId": 3,
                "quantityPerUnit": "48 - 6 oz jars",
                "unitPrice": 22,
                "unitsInStock": 53,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": true,
                "name": "Chef Anton's Cajun Seasoning",
                "supplier": {
                    "id": 2,
                    "companyName": "New Orleans Cajun Delights",
                    "contactName": "Shelley Burke",
                    "contactTitle": "Order Administrator",
                    "address": {
                        "street": "P.O. Box 78934",
                        "city": "New Orleans",
                        "region": "LA",
                        "postalCode": 70117,
                        "country": "USA",
                        "phone": "(100) 555-4822"
                    }
                },
                "category": {
                    "id": 3,
                    "description": "Desserts candies and sweet breads",
                    "name": "Confections"
                }
            },
            {
                "id": 5,
                "supplierId": 2,
                "categoryId": 2,
                "quantityPerUnit": "36 boxes",
                "unitPrice": 21.35,
                "unitsInStock": 0,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": true,
                "name": "Chef Anton's Gumbo Mix"
            },
            {
                "id": 6,
                "supplierId": 3,
                "categoryId": 2,
                "quantityPerUnit": "12 - 8 oz jars",
                "unitPrice": 25,
                "unitsInStock": 120,
                "unitsOnOrder": 0,
                "reorderLevel": 25,
                "discontinued": false,
                "name": "Grandma's Boysenberry Spread"
            },
            {
                "id": 7,
                "supplierId": 3,
                "categoryId": 7,
                "quantityPerUnit": "12 - 1 lb pkgs.",
                "unitPrice": 30,
                "unitsInStock": 15,
                "unitsOnOrder": 0,
                "reorderLevel": 10,
                "discontinued": false,
                "name": "Uncle Bob's Organic Dried Pears"
            },
            {
                "id": 8,
                "supplierId": 3,
                "categoryId": 2,
                "quantityPerUnit": "12 - 12 oz jars",
                "unitPrice": 40,
                "unitsInStock": 6,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": false,
                "name": "Northwoods Cranberry Sauce"
            },
            {
                "id": 9,
                "supplierId": 4,
                "categoryId": 6,
                "quantityPerUnit": "18 - 500 g pkgs.",
                "unitPrice": 97,
                "unitsInStock": 29,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": true,
                "name": "Mishi Kobe Niku"
            },
            {
                "id": 10,
                "supplierId": 4,
                "categoryId": 8,
                "quantityPerUnit": "12 - 200 ml jars",
                "unitPrice": 31,
                "unitsInStock": 31,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": false,
                "name": "Ikura"
            },
    
        ]
    
    // Məhsulların Ortalam qiymətini tapın.
    // Stok miqdarı 10-dan az olan məhsulların sayı nə qədərdir.
    // Adında x hərfi olan neçə məhsul var.
    // discontinued true olan neçə məhsul var.
    // categoryId-si 4 olan məhsulları consola yazdır.
    // Ən bahalı məhsulu tapın.
    // Ən ucuz məhsulu tapın.



// Məhsulların Ortalam qiymətini tapın.
// let sum = originalProducts.reduce((total, value) => total + value.unitPrice,0,);
// console.log(sum);
// let average = (sum / originalProducts.length).toFixed(2);
// console.log(Number(average));


//Stok miqdarı 10-dan az olan məhsulların sayı nə qədərdir.
// let products = originalProducts.filter(value => value.unitsInStock < 10);
// console.log(products);

// Adında x hərfi olan neçə məhsul var.
// let xletter = originalProducts.filter(value => value.name.includes("x".toLowerCase()));
// console.log(xletter);



// discontinued true olan neçə məhsul var.
// let result = originalProducts.filter(value => value.discontinued == true);
// console.log(result);


// categoryId-si 4 olan məhsulları consola yazdır.
// let result = originalProducts.filter(value => value.categoryId == 4);
// console.log(result);


// Ən bahalı məhsulu tapın.
// let sortedArr = originalProducts.toSorted((a,b)=> b.unitPrice - a.unitPrice);
// console.log(sortedArr[0].unitPrice);


// Ən ucuz məhsulu tapın.
// originalProducts.sort((a,b)=> a.unitPrice - b.unitPrice);
// console.log(originalProducts[0].unitPrice);
// console.log(originalProducts);
