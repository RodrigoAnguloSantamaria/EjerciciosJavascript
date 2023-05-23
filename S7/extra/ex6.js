const list = [
    {
      id: 1,
      isActive: true,
      age: 22,
      name: 'Bob'
    },
    {
      id: 2,
      isActive: false,
      age: 56,
      name: 'Tim'
    },
    {
      id: 3,
      isActive: true,
      age: 17,
      name: 'Clark'
    },
    {
      id: 4,
      isActive: true,
      age: 9,
      name: 'Roxy'
    },
    {
      id: 5,
      isActive: false,
      age: 71,
      name: 'Jim'
    }
  ];

  const listadoFiltrado=list.filter(item=>item.isActive);
  const listadoMapeado=listadoFiltrado.map(item=>{
    return {name: item.name, age: item.age}
  })
  const sumaEdades = listadoMapeado.reduce((acc,item) =>{
    return acc + item.age 
  },0) 
  

  console.log(listadoFiltrado)
  console.log(listadoMapeado)
  console.log(sumaEdades)