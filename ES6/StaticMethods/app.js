class Matematik {
    sqrt(x) {
        console.log(x * x);
    }
    static cube(x) {
        console.log(x * x * x);
    }
}
// Eğer static eklersen cube'ün başına o zaman bir obje oluşturmadan direkt olarak cube'a ulaşabilirsin
// const math = new Matematik();
// math.cube(3);
// console.log(math);
// math.sqrt(4);
// Matematik.sqrt(4);

// Yani şöyle göstereyim
// Matematik.cube(3);
console.log(Math.sqrt(4));