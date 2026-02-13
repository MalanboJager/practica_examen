//base de datos local de preguntas
const bd_juego = [
	{
	id:0,
	pregunta:"¿Cuál  de  las  siguientes  sanciones  se  aplica  al  servidor  público  que  transgrede  los principios éticos de la función pública y que mantiene vínculo laboral con una Entidad pública? Señale la alternativa correcta",
	op0:"Despido y amonestación.",
	op1:"Despido, amonestación y resolución contractual.",
	op2:"Despido y resolución contractual.",
	op3:"Amonestación y resolución contractual.",
	correcta:"0"
	},
	{
	id:1,
	pregunta:"Es el principio de la Función Pública que señala que el Servidor Público debe actuar con rectitud, honradez y honestidad, procurando satisfacer el interés general y desechando todo provecho o ventaja personal, obtenido por sí o por interpósita persona:",
	op0:"Respeto.",
	op1:"Eficiencia.",
	op2:"Idoneidad.",
	op3:"Probidad.",
	correcta:"3"
	},
	{
	id:2,
	pregunta:"¿Cuáles son los principios orientadores de la Política de Modernización de la Gestión Pública?  ",
	op0:"Orientación al ciudadano.",
	op1:"Transparencia, rendición de cuentas y ética pública.",
	op2:"Innovación y aprovechamiento de las tecnologías.",
	op3:"Todas las anteriores.",
	correcta:"3"
	},
	{
	id:3,
	pregunta:"Es el principio de la Función Pública que señala que el Servidor Público debe adecuar su conducta hacia el respeto de la Constitución y las Leyes, garantizando que en todas las fases  del proceso de toma de decisiones o en el  cumplimiento  de  los procedimientos administrativos, se respeten los derechos a la defensa y al debido procedimiento: ",
	op0:"Respeto.",
	op1:"Eficiencia.",
	op2:"Veracidad.",
	op3:"Idoneidad.",
	correcta:"2"
	},
	{
	id:4,
	pregunta:"Es el deber de la Función Pública que señala que el Servidor Público debe actuar con absoluta imparcialidad política, económica o de cualquier otra índole en el desempeño de sus  funciones  demostrando  independencia  a  sus  vinculaciones  con  personas,  partidos políticos o instituciones:  ",
	op0:"Transparencia.",
	op1:"Responsabilidad.",
	op2:"Discreción.",
	op3:"Responsabilidad.",
	correcta:"3"
	},
	{
	id:5,
	pregunta:"Cuando se señala que el Servidor Público está prohibido de mantener relaciones o de aceptar situaciones en cuyo contexto sus intereses personales, laborales, económicos o financieros pudieran estar en conflicto con el cumplimento de los deberes y funciones a su cargo, nos estamos refiriendo a la Prohibición Ética de la Función Pública:",
	op0:"Obtener ventajas indebidas.",
	op1:"Mantener intereses de conflicto.",
	op2:"Hacer mal uso de información privilegiada.",
	op3:"Realizar actividades de proselitismo político.",
	correcta:"1"
	},
	{
	id:6,
	pregunta:"Es el principio de la Función Pública que señala que el Servidor Público debe expresarse con autenticidad en las relaciones funcionales con todos los miembros de su institución y con la ciudadanía, y contribuye al esclarecimiento de los hechos:  ",
	op0:"Respeto.",
	op1:"Eficiencia.",
	op2:"Veracidad",
	op3:"Idoneidad",
	correcta:"2"
	},
	{
	id:7,
	pregunta:"Es el deber de la Función Pública que señala que el Servidor Público debe guardar reserva respecto  de  hechos  o  informaciones  de  los  que  tenga  conocimiento  con  motivo  o  en ocasión del ejercicio de sus funciones, sin perjuicio de los deberes y las responsabilidades que le correspondan en virtud de las normas que regulan el acceso y la transparencia de la información pública:  ",
	op0:"Transparencia.",
	op1:"Discreción.",
	op2:"Responsabilidad.",
	op3:"Neutralidad.",
	correcta:"1"
	},
	{
	id:8,
	pregunta:"Cuando se señala que el Servidor Público está prohibido de participar en transacciones u operaciones  financieras  utilizando  información  privilegiada  de  la  entidad  a  la  que pertenece o que pudiera tener acceso a ella por su condición o ejercicio del cargo que desempeña, ni debe permitir el uso impropio de dicha información para el beneficio de algún interés., nos estamos refiriendo a la Prohibición Ética de la Función Pública:   ",
	op0:"Obtener ventajas indebidas.",
	op1:"Mantener intereses de conflicto.",
	op2:"Hacer mal uso de información privilegiada.",
	op3:"Realizar actividades de proselitismo político.",
	correcta:"2"
	},
	{
	id:9,
	pregunta:"De acuerdo al Código de Ética de la Función Pública, son fines de la función pública:",
	op0:"El Servicio a la Nación, de conformidad con lo dispuesto en la Constitución Política, y la obtención de mayores niveles de eficiencia del aparato estatal, de manera que se logre una mejor atención a la ciudadanía, priorizando y optimizando el uso de los recursos públicos.",
	op1:"Maximizar el valor del dinero de los contribuyentes y la obtención de mayores niveles de eficiencia del aparato estatal, de manera que se logre una mejor atención a la ciudadanía, priorizando y optimizando el uso de los recursos públicos.",
	op2:"El Servicio a la Nación, de conformidad con lo dispuesto en el Código Civil, Ley del Procedimiento Administrativo General, y demás normatividad aplicable.",
	op3:"La obtención de mayores niveles de eficiencia del aparato estatal, esto es, calidad, precio y oportunidad, de manera que se logre una mejor atención a la ciudadanía, priorizando y optimizando el uso de los recursos públicos.",
	correcta:"0"
	},
	{
	id:10,
	pregunta:"Son principios del Código de Ética de la Función Pública:",
	op0:"Neutralidad",
	op1:"Responsabilidad",
	op2:"Transparencia",
	op3:"Lealtad y Obediencia",
	correcta:"3"
	},
	{
	id:11,
	pregunta:"NO son deberes del Código de Ética de la Función Pública:",
	op0:"Neutralidad",
	op1:"Discreción",
	op2:"Veracidad",
	op3:"Ejercicio Adecuado del Cargo",
	correcta:"2"
	},
	{
	id:12,
	pregunta:"La prohibición de “mantener intereses en conflicto” está referida a:",
	op0:"Obtener o procurar beneficios o ventajas indebidas, para sí o para otros, mediante el uso de su cargo, autoridad, influencia o apariencia de influencia.",
	op1:"No constituye una prohibición",
	op2:"Mantener relaciones o aceptar situaciones en cuyo contexto sus intereses personales, laborales, económicos o financieros pudieran estar en conflicto con el cumplimiento de los deberes y funciones a su cargo.",
	op3:"Ejercer  presiones,  amenazas  o  acoso  sexual  contra  otros  servidores  públicos  o subordinados que puedan afectar la dignidad de la persona o inducir a la realización de acciones dolosas",
	correcta:"2"
	},
	{
	id:13,
	pregunta:"Sobre la base de los objetivos establecidos en el…………………………………….y en el………………….se debe formular……………………………………………Seleccione la alternativa correcta.",
	op0:"Plan estratégico de desarrollo nacional, plan estratégico institucional, presupuesto por resultados.",
	op1:"Plan  estratégico  institucional,  presupuesto  por  resultados,  plan  estratégico  de desarrollo nacional.",
	op2:"Presupuesto por resultados, plan operativo institucional, plan estratégico institucional.",
	op3:"Presupuesto  por  resultados,  plan  anual  de  contrataciones,  plan  estratégico institucional.",
	correcta:"0"
	},
	{
	id:14,
	pregunta:"Señale la alternativa correcta en la que se elabora los siguientes instrumentos de gestión para la Planificación Estratégica de la Municipalidad Distrital: 1.Plan de Desarrollo Local Concertado, 2.Plan Estratégico Institucional, 3.Plan de Desarrollo Nacional.",
	op0:"3,1,2",
	op1:"3,2,1",
	op2:"1,3,2",
	op3:"1,2,3",
	correcta:"0"
	},
	{
	id:15,
	pregunta:"De los siguientes elementos señale la secuencia respecto al Plan Estratégico Institucional concordante con la Política Nacional de Modernización de la Gestión Pública: 1 Fase Análisis Prospectivo se revisa el diagnostico causal de las variables estratégicas. 2 Fase Estratégica  es  el  elemento  articulador  con  otros  sistemas  administrativos  3  Fase Institucional permite tener como resultado la aprobación del Plan Estratégico Institucional.",
	op0:"1,2,3",
	op1:"3,1,2",
	op2:"2,3,1",
	op3:"1,3,2",
	correcta:"1"
	},
	{
	id:16,
	pregunta:"¿Cuál de los siguientes no es un deber ético de la Función Pública que todo Servidor Público debe tener en cuenta en su actuar?",
	op0:"Justicia y equidad",
	op1:"Probidad",
	op2:"Responsabilidad",
	op3:"Uso adecuado de los bienes del estado",
	correcta:"0"
	},
	{
	id:17,
	pregunta:"¿Cuál de los elementos del Plan Estratégico Institucional se define como un conjunto de actividades ordenadas que contribuyen al logro de un objetivo que involucran el uso de recursos, y que cuentan con una unidad de medida y meta física determinada? Señale la alternativa correcta:",
	op0:"Las acciones estratégicas institucionales",
	op1:"La visión",
	op2:"La misión",
	op3:"Los objetivos estratégicos institucionales",
	correcta:"0"
	},
	{
	id:18,
	pregunta:"Cuál  de  las  siguientes  alternativas  contiene  los  elementos  del  Plan  Estratégico Institucional necesarios para elaborar las acciones estratégicas",
	op0:"La misión institucional/los objetivos estratégicos",
	op1:"La misión institucional/ruta estratégica",
	op2:"Los objetivos estratégicos/ruta estratégica",
	op3:"Misión institucional/objetivos estratégicos",
	correcta:"0"
	},
	{
	id:19,
	pregunta:"La cadena de valor público del Planeamiento Estratégico. Señale la correcta",
	op0:"Insumo/proceso/producto/resultado/impacto",
	op1:"Actividad/acción estratégica institucional/objetivo estratégico institucional",
	op2:"Actividad estratégica/objetivo estratégico/impacto",
	op3:"Insumo/actividades resultado/objetivo estratégico",
	correcta:"0"
	},
	{
	id:20,
	pregunta:"En una licitación pública para la adquisición de maquinaria pesada el Titular de la Entidad declaro la nulidad del procedimiento porque el comité de selección incluyo en las bases como  factores  de  evaluación  la  experiencia  del  postor  y  la  metodología  propuesta  al respecto. Señale la alternativa correcta.",
	op0:"Se vulnero el principio ético de idoneidad del servidor público al establecer como factores de evaluación la experiencia del postor y la metodología propuesta tratándose de una adquisición de bienes.",
	op1:"Se vulnero el principio ético de idoneidad del servidor público al establecer como factores de evaluación la experiencia del postor para la adquisición de bienes.",
	op2:"Se vulnero el principio ético de idoneidad del servidor público al establecer como factores de evaluación la metodología propuesta para la adquisición de bienes.",
	op3:"No se vulnero ningún principio ético del servidor porque la experiencia del postor y la metodología propuesta se pueden considerar como factores de evaluación para una adquisición de bienes.",
	correcta:"0"
	},
	{
	id:21,
	pregunta:"En el Plan Operativo Institucional de la Dirección de Turismo de un Gobierno Regional se establece como objetivo institucional “Promocionar los destinos turísticos de la Región”; al respecto el Área Usuaria responsable del cumplimiento de ese objetivo requiere en su Cuadro de Necesidades la contratación del Servicio de producción de videos de promoción de  atractivos turísticos, y la  adquisición de  buses para  turismo. Al respecto señale  la alternativa correcta.",
	op0:"El requerimiento para contratar el servicio de producción de videos está vinculado al objetivo estratégico institucional, pero la adquisición de buses para turismo no está vinculado a dicho objetivo.",
	op1:"Tanto el requerimiento para contratar el servicio de producción de videos como el requerimiento para adquirir buses para turismo está vinculado al objetivo estratégico institucional.",
	op2:"El requerimiento para contratar el servicio de producción de videos y el requerimiento para  adquirir  buses  para  turismo  no  están  vinculados  al  objetivo  estratégico institucional.",
	op3:"El  requerimiento  para  adquirir  buses  para  turismo  está  vinculado  al  objetivo estratégico institucional, pero el requerimiento para contratar el servicio de producción de videos no está. ",
	correcta:"0"
	},
	{
	id:22,
	pregunta:"En el Plan Operativo Institucional de la Dirección de Educación de un Gobierno Regional se establece como objetivo institucional “Reducir las dificultades de aprendizaje a los estudiantes de educación básica especial”. Al respecto, el Área Usuaria responsable del cumplimiento de ese objetivo requiere en su cuadro de necesidades la contratación del diseño  y  elaboración  de  material  didáctico  y  la  adquisición  de  mobiliario  escolar.  Al respecto señale la alternativa correcta.",
	op0:"El  requerimiento para contratar  el diseño y  elaboración de  material  didáctico está vinculado  al  objetivo  estratégico  institucional,  pero  el  requerimiento  para  adquirir mobiliario escolar no está vinculado a dicho objetivo.",
	op1:"Tanto el requerimiento para contratar el diseño y elaboración de materiales didáctico, como el requerimiento para adquirir mobiliario escolar están vinculados al objetivo estratégico.",
	op2:"El requerimiento para contratar el diseño y elaboración de material didáctico, y el requerimiento  para  adquirir  uniformes  escolares  no  están  vinculados  al  objetivo estratégico institucional.",
	op3:"El requerimiento para adquirir mobiliario escolar está vinculado a objetivo estratégico institucional pero el requerimiento para contratar el diseño y elaboración de material didáctico no está vinculado a dicho objetivo.",
	correcta:"1"
	},
	{
	id:23,
	pregunta:"En  un  contrato  de  un  servicio  de  digitalización  de  documentos  suscritos  por  una Municipalidad Distrital, se establece como penalidad S/. 50.00 por cada día que utilice personal que no cuente con vestimenta formal.",
	op0:"La penalidad es proporcional, pero resulta subjetiva, lo que vulnera el principio ético de idoneidad.",
	op1:"La penalidad es objetiva, pero resulta desproporcionada, lo que vulnera el principio ético de idoneidad.",
	op2:"La penalidad es objetiva y proporcional con el objeto de la contratación, por lo que no vulnera ningún principio ético.",
	op3:"La penalidad es desproporcionada y subjetiva, lo que vulnera el principio ético de idoneidad.",
	correcta:"3"
	},
	{
	id:24,
	pregunta:"Un Funcionario no calcula bien la penalidad, la penalidad era de 30 mil y cobro solo 10 mil,  tiene responsabilidad:",
	op0:"Administrativa y civil",
	op1:"Civil",
	op2:"Penal",
	op3:"Administrativa, civil y penal",
	correcta:"0"
	},
	{
	id:25,
	pregunta:"Un funcionario de una municipalidad tardó 40 días para realizar el pago al contratista que se  otorgó  la  conformidad  por  la  entrega  de  cámaras  de  video  vigilancia,  el  cual  la Municipalidad  tuvo  que  pagar  los  intereses  legales  correspondientes.  Señale  la responsabilidad que asumiría el Funcionario.",
	op0:"La Municipalidad debe cobrar al funcionario el monto de los intereses legales pagados al contratista.",
	op1:"La  Municipalidad  debe  correr  traslado  al  Ministerio  Público  para  que  realice  las acciones legales correspondientes.",
	op2:"La Municipalidad debe sancionar al funcionario iniciando un proceso administrativo.",
	op3:"El funcionario no asume ninguna responsabilidad civil, ni penal, ni administrativo porque no está previsto en la ley de contrataciones del estado.",
	correcta:"2"
	},
	{
	id:26,
	pregunta:"¿Cuál  de  las  siguientes  no  es  una  prohibición  ética  de  la  función  pública?  Señale  la alternativa correcta. ",
	op0:"Hacer mal uso de información privilegiada.",
	op1:"Discreción.",
	op2:"Ejercer acoso sexual con otros servidores públicos o subordinados.",
	op3:"Obtener ventajas indebidas.",
	correcta:"1"
	},
	{
	id:27,
	pregunta:"¿Cuál de las siguientes no es un principio ético que todo servidor público debe tener en cuenta? Señale la alternativa correcta. ",
	op0:"Veracidad",
	op1:"Idoneidad",
	op2:"Justicia y equidad.",
	op3:"Discreción.",
	correcta:"3"
	},
	{
	id:28,
	pregunta:"Selecciona la alternativa correcta, respecto al alineamiento entre el Plan Estratégico de Desarrollo Nacional, el Plan Estratégico Institucional y el Presupuesto por Resultados.",
	op0:"El  Plan  Anual  de  Contrataciones  se  alinea  al  Plan  Estratégico  Institucional,  y  en función a ello se formula el Plan Operativo Institucional.",
	op1:"El Plan Estratégico Institucional se alinea al Plan Estratégico de Desarrollo Nacional, y en función a ello se formula el Presupuesto por Resultados.",
	op2:"El  Plan  Anual  de  Contrataciones  se  alinea  al  Plan  Operativo  Institucional,  y  en función a ello se formula el Plan Estratégico Institucional.",
	op3:"El Plan Estratégico de Desarrollo Nacional se alinea al Plan Estratégico Institucional, y en función a ello se formula el Presupuesto por Resultados.",
	correcta:"3"
	},


]

//para guardar las respuestas elegidas
let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;
//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funciòn.
    // A dicha función le envio el numero de label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);
	const label4 = crearLabel("3",pregunta.op3);

    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);
	opciones.appendChild(label4);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la funciòn que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

//botón corregir
let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){
        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){ //respuesta correcta
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }else{//no acerto
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }

    //hacemos un scroll hacia arriba
    window.scrollTo(0,0);
    //colocamos la cantidad que acertoy las que no acertó
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (29-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}

let mostrar = document.getElementById("mostrarRespuestas");

mostrar.onclick = function(){

    for(let i=0; i < bd_juego.length; i++){

        const pregunta = bd_juego[i];

        // selecciona el radio correcto automáticamente
        let radios = document.getElementsByName("p" + i);
        radios[pregunta.correcta].checked = true;

        // opcional: marcar visualmente como correcta
        let idCorreccion = "p" + i + pregunta.correcta;
        document.getElementById(i).className = "contenedor-pregunta correcta";
        document.getElementById(idCorreccion).innerHTML = "&check;";
        document.getElementById(idCorreccion).className = "acierto";
    }

    window.scrollTo(0,0);
}

    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }