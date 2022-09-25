const { promises: fs, readFile } = require("fs");


class Contenedor {
    constructor(path) {
        this.path = path;
    }

    const save = async (newObject) => {
        const data = JSON.parse(await fs.readFile(this.path, "utf8"));
        if (data != "") {
            newObject.id = Math.max(...data.map((o) => o.id)) + 1;
        } else {
            newObject.id = 1;
        }
        data.push(newObject);
        await fs.writeFile(this.path, JSON.stringify(data), "utf8");
        return await newObject.id;
    };

    const getAll = async () => {
        const data = JSON.parse(
            await fs.readFile(this.path, "utf8", (err, data) => {
                if (err) {
                    console.log(err);
                }
            }
            )
        );
        return data;
    };

    const getById = async (id) => {
        let found = false;
        const data = await this.getAll();
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                found = true
                return data[i];
            }
        } if (!found) { console.log('el id seleccionado no existe') }
    };

    const deleteById = async (id) => {
        const data = JSON.parse(await fs.readFile(this.path, "utf8", (err, data) => {
            ;
            if (err) {
                console.log(err);
            }
        }))
        const newData = data.filter((item) => item.id !== id);
        if (newData.length != data.length) {
            return await fs.writeFile(
                this.path, JSON.stringify(newData), (err, data) => {
                    if (err) { console.log(err); }
                })
        }
        else {
            console.log('El id seleccionado no existe')
        }
    }
        

    deleteAll = async () => {
        const data = [];
        return await fs.writeFile(this.path, JSON.stringify(data), (err, data) => {
            if (err) {
                console.log(err);
            }
        })
    }
}	

//prueba = () => {
		//console.log(this.path);
	//};


newObject = {
	title: "album del mundia",
	price: 198450,
	url: "www.musimundo.com",
};

//********************************************************************* //
//Para probar basta sacar descomentar las lineas que siguen              //
//La Sugerencia es hacerlo de dos en dos para poder ver los resultados
//La entrega incluye un Archivos pord.txt que es un backup de productos.txt//
// su funcion es poder volver a tener un set de 8 productos
//********************************************************************* //

const myInstance = new Contenedor("./productos.txt");
//console.log('mostrar id 6');
//myInstance.getById(6).then((data) => console.log(data));
//console.log("mostrar todos");
//myInstance.getAll().then((data) => console.log(data));
//console.log('eliminar el 6')
//myInstance.deleteById(6)
//console.log("tratar de mostrar id 6");
//myInstance.getById(6).then((data) => console.log(data));
//myInstance.getAll().then((data) => console.log(data));
//console.log('agregar album del mundial ')
//myInstance.save(newObject)
//    .then((data) => console.log(`elproducto fue creado con el id ${data}`));
//myInstance.getById(10).then((data) => console.log(data));
//console.log('borrar todos los productos')
//myInstance.deleteAll()
//myInstance.save(newObject).then((data) =>
//    console.log(`elproducto fue creado con el id ${data}`));

