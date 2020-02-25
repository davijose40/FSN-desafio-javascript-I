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
    let [aluno] = alunosDaEscola.filter(el => el.nome === nome);
    res = (aluno) ? "Aluno encontrado" : "Não temos registro desse Aluno";
    console.log(res);
    return aluno;
};

function matricularAluno(aluno, curso){
    
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
    //  Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
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

