const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
});

connection.connect(function(err){
    if(err){
        throw err;
    }

    console.log("Terkoneksi dengan sukses!");

    let sql = "INSERT INTO product(nama_product, gambar_product, harga_product, des_product, createdate) VALUES('Sepatu Sneaker', 'sneaker.jpg', '200000', 'kami menjual sepatu berkualitas semua ukuran', '2020-01-17'), ('Sepatu Pantogel', 'pantofel.png', '500000', 'kami menjual sepatu pantofel 2020', '2020-01-30')";

    connection.query(sql, function (err, result){
        if(err){
            throw err;
        }
        
        console.log("Record berhasil di-insert!");
        connection.destroy();
    });
});