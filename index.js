// Base a ser utilizada
const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}
];


// implementação
const adicionarAluno = (nome) => {
    alunosDaEscola.push({
        nome,
        notas:[],
        cursos: [],
        faltas: 0
    });
    console.log(`Cadastro do Aluno: ${nome} realizado com sucesso.`);
}


console.log('antes da função adicionar: ',alunosDaEscola.length);
console.log(adicionarAluno('Pollyana'));
console.log('depois da função adicionar: ',alunosDaEscola.length);
console.log('depois da função adicionar: ',alunosDaEscola);