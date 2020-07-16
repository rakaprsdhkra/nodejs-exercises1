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

    let sql = "CREATE TABLE product(id_product INT(11) AUTO_INCREMENT PRIMARY KEY, nama_product VARCHAR(60) NOT NULL, gambar_product VARCHAR(200) NOT NULL, harga_product INT(13) NOT NULL, des_product TEXT NOT NULL, createdate DATE NOT NULL)";
    
    connection.query(sql, function (err, result) {
        if(err){
            throw err;
        }
        
        console.log("Tabel berhasil dibuat!");
        connection.destroy();
    });
});