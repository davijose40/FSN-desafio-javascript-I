// Base a ser utilizada
const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}
];



function adicionarAluno(nome) {

    alunosDaEscola.push({
        nome,
        notas: [],
        cursos: [],
        faltas: 0,
    });
    console.log(`Cadastro do Aluno: ${nome} realizado com sucesso.`);

};

function listarAlunos() {
    
    //lista objeto aluno no console.
    console.log("==========Lista dos Alunos==========")
    console.log(" ")
    alunosDaEscola.forEach(element => {
       
        console.log(`Nome: ${element.nome}`);
        if(element.notas > 0) {
            console.log(`Nota: ${element.notas}`);
        } else {
            console.log("Não existem notas lançadas");
        }
        if(element.cursos.length > 0) {
            element.cursos.forEach(el => {
                console.log(`Nome do Curso: ${el.nomeDoCurso}`);
                console.log(`Data da Matricula: ${el.dataMatricula}`);
            })
        } else {
            console.log(`${element.nome} não está em nenhum curso.`);
        }
        console.log(`Faltas: ${element.faltas}`);
        console.log("     ");
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("     ");
    });

};

function buscarAluno(nome) {

    //busca string nome no objeto aluno e devolve um objeto
    let [aluno] = alunosDaEscola.filter(el => el.nome === nome);
    res = (aluno) ? "Aluno encontrado" : "Não temos registro desse Aluno";
    console.log(res);
    return aluno;

};

function matricularAluno(aluno, curso){
    
    //busca string aluno e adiciona curso e new Date
    let verificaSeExisteAluno = buscarAluno(aluno);
    let matriculaNovCurso = {
        nomeDoCurso: curso,
        dataMatricula: new Date
    };

    if(verificaSeExisteAluno) {
        let aluno = verificaSeExisteAluno;
        aluno.cursos.push(matriculaNovCurso)
        console.log(`Aluno ${aluno.nome} matriculado no curso ${matriculaNovCurso.nomeDoCurso} com sucesso.`);
    } else {
        console.log("Não foi possivel fazer a matricula, aluno não encontrado.")
    }

};

function aplicarFalta(aluno){

    //busca usando objeto aluno incrementa falta de um sempre que chamada
    let verificaSeExisteAluno = buscarAluno(aluno.nome);
    if(verificaSeExisteAluno) {
        let aluno = verificaSeExisteAluno;
        aluno.faltas++;
        console.log(`Aluno ${aluno.nome} teve acrescida uma falta totalizando: ${aluno.faltas}.`);
    } else {
        console.log("Não foi possivel atribuir falta, aluno não encontrado.");
    }

};



//console.log(adicionarAluno('Pollyana'));
//console.log(listarAlunos());
//console.log(buscarAluno('Lucca'));
//console.log(matricularAluno('Lucca', "javascript"));
console.log(aplicarFalta({nome:"Edson",notas:[],cursos:[],faltas:2}));

