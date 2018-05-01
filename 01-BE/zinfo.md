
================================================================
Site with examples of Autentication using GitHub:
URL: https://github.com/graphcool/prisma/tree/master/examples
================================================================

URL: when research:
https://www.prisma.io/features








=== Reading about RELATIOSN === https://www.prisma.io/docs/reference/service-configuration/data-modelling-(sdl)-eiroozae8u#relations

-----------------------------------------------------



===[Create Singer with Song]==========================
mutation{
  createSinger(data: {
    name: "Jolin Tsai",
    country: "Taiwan",
    age: 32,
    hits: {
      create: {
        name: "Honey Trap"
      }
    }
  }){
    id
    name
    country
    id
  }
}

=====================================================
===[Query One Singer & Songs]================================
query{
  singer(where: { id: "cjgo2bcqcezbd0b06e7umzy8x" }){
    id
    name
    age
    country
    hits(where: { owner: { id: "cjgo2bcqcezbd0b06e7umzy8x" } }){
      name
    }
  }
}

=====================================================




===[Get One by ID]===================================
query{
  singer(where: {id: "cjgnzwtzsek9z0b068zeen892"}){
    id
    name
    country
    age
  }
}

=====================================================


===[Delete One by ID]================================
mutation{
  deleteSinger(where: { id: "cjgnzz6i4ekm00b06gmq3bkrz" }){
    name
  }
}

=====================================================


/home/edxael/03-Ind-Pro/09-GQL-Examples/01-BE/zinfo.md