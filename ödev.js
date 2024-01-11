const students = [
    {
        name: "Alice",
        surname: "Johnson",
        isSuccessful: false,
        age: 25,
        department: "Computer Science"
    },
    {
        name: "Bob",
        surname: "Smith",
        isSuccessful: false,
        age: 22,
        department: "Mechanical Engineering"
    },
    {
        name: "Charlie",
        surname: "Brown",
        isSuccessful: true,
        age: 21,
        department: "English Literature"
    },
    {
        name: "Büşra",
        surname: "Güner",
        isSuccessful: true,
        age: 31,
        department: "Software Developer"
    }
];

// MAP - Öğrenci Ad Soyad Listesi
const ogrenciAdSoyadListesi = students.map(student => `${student.name} ${student.surname} ${student.age}`);
console.log("Öğrenci Ad Soyad Listesi:", ogrenciAdSoyadListesi);

// FILTER - Başarılı Olmayan Öğrenciler
const basarisizOgrenciler = students.filter(student => !student.isSuccessful);
console.log("Başarısız Öğrenciler:", basarisizOgrenciler);

// SLICE - İlk 2 Öğrenci
const ilkIkiOgrenci = students.slice(0, 2); //0. indeksden 2. indekse kadar. 2. indeks dahil değil.
console.log("İlk 2 Öğrenci:", ilkIkiOgrenci);

// SPLICE - 2. ve 3. Öğrenciyi Silme
const silinecekOgrenciler = students.splice(1, 2); //indeksler
console.log("Silinen Öğrenciler:", silinecekOgrenciler);
console.log("Kalan Öğrenciler:", students);

//------------------------------------------------------------------
const yeniOgrenciler = [
    {
        name: "David",
        surname: "Lee",
        isSuccessful: false,
        age: 23,
        department: "Electrical Engineering"
    },
    {
        name: "Emma",
        surname: "Taylor",
        isSuccessful: true,
        age: 28,
        department: "Graphic Design"
    }
];

// Yeni öğrencileri mevcut öğrencilerle birleştirme
const yeniOgrenciListesi = students.concat(yeniOgrenciler);