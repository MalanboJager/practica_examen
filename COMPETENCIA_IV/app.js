//base de datos local de preguntas
const bd_juego = [
	{
	id:0,
	pregunta:"En un contrato periódico de suministro de bienes por S/. 1´200,00.00 (Un millón doscientos mil con 00/100 Soles) que se ejecutará en 12 meses, al tratarse de entregas mensuales, una micro y pequeña empresa solicitó el beneficio de la retención de la garantía de fiel cumplimiento ¿Cuánto deberá retener la Entidad?",
	op0:"S/. 20,000.00 en meses alternados, durante la vigencia del contrato.",
	op1:"S/. 120,000.00 únicamente en el primer pago.",
	op2:"No corresponde efectuar ninguna retención por cuanto cada entrega asciende a S/. 100,000.00.",
	op3:"S/. 20,000.00 durante los seis (6) primeros pagos.",
	correcta:"3"
	},
	{
	id:1,
	pregunta:"Se suscribió un contrato de prestación única por el monto total de S/ 800 000,00. La empresa cumplió con los entregables 1 y 2, recibiendo la conformidad de la entidad. El entregable 3 (plazo de entrega: 60 dc / porcentaje de pago: 60%), lo presentó con 30 días de retraso injustificado. La entidad debe aplicar una penalidad. Realice el cálculo de la penalidad ¿Cuál es el monto total aplicable?",
	op0:"S/. 80,000.00.",
	op1:"S/. 100,000.00.",
	op2:"S/. 120,000.00.",
	op3:"S/. 400,000.00",
	correcta:"0"
	},
	{
	id:2,
	pregunta:"Sobre la formalidad y requisitos para el perfeccionamiento del contrato, identifique la respuesta correcta:",
	op0:"El contrato se puede perfeccionar también con la recepción de la orden de compra o de servicios, cuando el valor estimado supere los cien mil Nuevos Soles (S/. 100,000.00), en el caso de subasta inversa.",
	op1:"En el caso de procedimientos de selección por relación de ítems, se puede perfeccionar el contrato con la recepción de una orden de compra, cuando el monto del valor estimado del ítem corresponda a la adjudicación simplificada.",
	op2:"En los procedimientos de subasta inversa electrónica y adjudicación simplificada para bienes y servicios en general, el contrato se puede perfeccionar con la recepción de la orden de compra o de servicios, siempre que el monto del valor estimado no supere los cien mil soles (S/ 100,000.00).",
	op3:"El contrato se puede perfeccionar también con la recepción de la orden de compra o de servicios, cuando el valor estimado supere los cien mil Nuevos Soles (S/. 100,000.00), en el caso de subasta inversa.",
	correcta:"2"
	},
	{
	id:3,
	pregunta:"Las controversias que surjan entre las partes sobre la ejecución, interpretación, resolución, inexistencia, ineficacia o invalidez del contrato, se resuelven mediante:",
	op0:"Solo Conciliación.",
	op1:"Solo Arbitraje.",
	op2:"Conciliación o Arbitraje.",
	op3:"Recurso de Apelación.",
	correcta:"2"
	},
	{
	id:4,
	pregunta:"Sobre una contratación complementaria, identifique la respuesta correcta:",
	op0:"No caben contrataciones complementarias únicamente en los contratos que tengan por objeto la ejecución de obras.",
	op1:"Para formalizar un contrato complementario se debe suscribir la adenda correspondiente.",
	op2:"Se puede contratar complementariamente hasta el 30% del monto del contrato vigente.",
	op3:"Esta procede dentro de los tres (3) meses posteriores a la culminación del plazo de ejecución del contrato.",
	correcta:"3"
	},
	{
	id:5,
	pregunta:"Luego de seis (6) meses de otorgada la conformidad y efectuado el pago, por los 100 colchones de asistencia humanitaria brindados por la empresa MI HOGAR S.A., LA Entidad advierte que los bienes no están rellenos del material solicitado, por lo cual, gestiona iniciar un proceso arbitral. ¿Cuál es su posición al respecto?",
	op0:"No es posible, al haber culminado el contrato.",
	op1:"No es posible, al haber otorgado la conformidad.",
	op2:"Es posible sólo si se ha consignado textualmente un convenio arbitral en el contrato.",
	op3:"Es posible en la medida que se trate de vicios ocultos.",
	correcta:"3"
	},
	{
	id:6,
	pregunta:"¿De qué forma se notifica al contratista de su incumplimiento que amerita la resolución del contrato, en la modalidad de Acuerdo Marco?",
	op0:"Por fax.",
	op1:"Por correo electrónico.",
	op2:"Por carta notarial.",
	op3:"Por el SEACE.",
	correcta:"3"
	},
	{
	id:7,
	pregunta:"¿Quién es el responsable de la aplicación de penalidades por incumplimiento del contratista?",
	op0:"La Oficina de Tesorería.",
	op1:"El Área Usuaria.",
	op2:"El Titular de la Entidad.",
	op3:"El Órgano Encargado de las Contrataciones.",
	correcta:"3"
	},
	{
	id:8,
	pregunta:"¿Cuál de los siguientes documentos forman parte integrante del contrato?",
	op0:"Sólo el documento que lo contiene y el documento del procedimiento de selección que establezca reglas definitivas.",
	op1:"El documento que lo contiene, el documento del procedimiento de selección que establezca reglas definitivas, la oferta ganadora y el estudio de mercado.",
	op2:"El documento que lo contiene, el documento del procedimiento de selección que establezca reglas definitivas, la oferta ganadora y el resumen ejecutivo.",
	op3:"El documento que lo contiene, el documento del procedimiento de selección que establezca reglas definitivas, la oferta ganadora y los documentos derivados del procedimiento de selección que establezcan obligaciones para las partes.",
	correcta:"3"
	},
	{
	id:9,
	pregunta:"Durante la ejecución del Contrato Nº 005-2017-APORTE PERÚ, se origina una controversia en su interpretación, sobre la cual, la Entidad estima oportuno aplicar la Ley de Procedimiento Administrativo General. Al respecto, cuál es su posición sobre la aplicación supletoria de las disposiciones contenidas en la Ley 27444, sobre las relaciones jurídicas originadas en los contratos celebrados bajo el ámbito de la Ley de Contrataciones.",
	op0:"Si son de aplicación supletoria.",
	op1:"No son de aplicación supletoria.",
	op2:"Son de aplicación supletoria sólo en la sección correspondiente al Silencio Administrativo.",
	op3:"No son de aplicación supletoria, por el contrario, deben ser aplicadas en el primer orden de prelación.",
	correcta:"0"
	},
	{
	id:10,
	pregunta:"Durante la ejecución de un contrato suscrito por un Ministerio para el servicio de impresión de textos, un contratista presenta para renovación, una garantía de fiel cumplimiento. Posteriormente, el Ministerio verifica que dicha garantía es falsa. En este caso ¿Se configura un delito y un supuesto de aplicación de penalidad?",
	op0:"En este caso se configuro un delito por presentar documentación falsa. Pero no constituye un supuesto de aplicación de penalidades.",
	op1:"En este caso se configuro un delito por presentar documentación falsa y constituye un supuesto de aplicación de penalidades.",
	op2:"En este caso se constituye un supuesto de aplicación de penalidades, pero no se configuro un delito.",
	op3:"En este caso no se configuro un delito por presentar documentación falsa y tampoco constituye un supuesto de aplicación de penalidades.",
	correcta:"0"
	},
	{
	id:11,
	pregunta:"¿Cuál de los siguientes casos es causal para que la Entidad declare la nulidad de una orden de compra que perfeccione el contrato por un monto menor a S/. 100,000?",
	op0:"Cuando se acredite que el contratista ha intentado pagar un soborno en el procedimiento de selección.",
	op1:"Cuando el contratista incumpla injustificadamente las obligaciones contractuales a su cargo pese a ser requerido para ello.",
	op2:"Cuando el contratista haya cumplido la cláusula del contrato",
	op3:"Cuando el contratista paralice o reduzca injustificadamente la ejecución de la prestación, pese a ser requerido para corregir tal situación",
	correcta:"0"
	},
	{
	id:12,
	pregunta:"Las prestaciones pendientes en caso de resolución del contrato se ejecutan.",
	op0:"Declarando desierto el procedimiento de selección y convocando uno nuevo para contratar.",
	op1:"Contratando a alguno de los postores que participaron en el procedimiento de selección.",
	op2:"Contratando al proveedor mediante contratación directa por causa de desabastecimiento.",
	op3:"Se contrata obligatoriamente con el que quedo en segundo lugar, estando obligado a contratar.",
	correcta:"1"
	},
	{
	id:13,
	pregunta:"Respecto de la subcontratación, se puede subcontratar las prestaciones esenciales del contrato vinculadas a los aspectos que determinaron la selección del contratista. Señale la alternativa correcta.",
	op0:"VERDADERO",
	op1:"FALSO",
	op2:"Verdadero sólo en bienes",
	op3:"Ninguna de las anteriores",
	correcta:"1"
	},
	{
	id:14,
	pregunta:"El cómputo del plazo para la suscripción del contrato, será desde el día siguiente a la publicación del consentimiento de la buena pro. Señale la alternativa correcta:",
	op0:"VERDADERO",
	op1:"FALSO",
	op2:"Verdadero sólo en órdenes de compra",
	op3:"Ninguna de las anteriores.",
	correcta:"0"
	},
	{
	id:15,
	pregunta:"Cuando se resuelva el contrato y la Entidad tenga la necesidad urgente de continuar con la ejecución de las prestaciones pendientes, sin perjuicio de que dicha resolución se encuentre sometida a los medios de solución de controversias que correspondan, esta puede invitar a los postores que participaron en el procedimiento de selección, a fin de suscribir contrato para la ejecución de dichas prestaciones. Señale la alternativa correcta:",
	op0:"VERDADERO",
	op1:"FALSO",
	op2:"Falso, sólo en bienes",
	op3:"Ninguna de las anteriores",
	correcta:"0"
	},
	{
	id:16,
	pregunta:"Marque la afirmación correcta, sobre las prestaciones adicionales, las reducciones, subcontratación y la cesión de derechos y de posición contractual.",
	op0:"El contratista puede ceder a favor de terceros únicamente su derecho de pago.",
	op1:"El límite cuantitativo para la contratación de prestaciones adicionales o para la reducción de prestaciones es el 20% del monto del contrato vigente a la fecha de dicha decisión.",
	op2:"Cuando se contraten las prestaciones adicionales y/o se reduzcan prestaciones, el contratista puede aumentar o reducir proporcionalmente la garantía de fiel cumplimiento.",
	op3:"Únicamente se podrá subcontratar hasta el 40% del monto del contrato original, independientemente de que se traten de prestaciones esenciales del contrato vinculados a los aspectos por los que se seleccionó al contratista.",
	correcta:"0"
	},
	{
	id:17,
	pregunta:"Respecto a la excepción de presentar garantía de fiel cumplimiento, no es verdad que:",
	op0:"No se presenta en los contratos de arrendamiento de bienes muebles.",
	op1:"No se presenta en los contratos de ejecución y consultorías de obras cuyos montos sean menores a S/100,000",
	op2:"No se presenta en los contratos de bienes y servicios, distintos a la consultoría de obras, cuyos montos sean menores a S/ 100,000",
	op3:"No se presenta en la adquisición de bienes inmuebles.",
	correcta:"1"
	},
	{
	id:18,
	pregunta:"¿La Entidad Ayuda Perú tiene contratado el servicio de limpieza para sus almacenes nacionales en todo el Perú, con la empresa ‘La Escobita SA’?, siendo que su plazo de ejecución está próximo a vencer. ¿Al respecto, el Jefe del Área Usuaria le consulta si es posible suscribir una Adenda a fin de contar con dicho servicio por un año más?",
	op0:"Si, por el Principio de Economía y Eficiencia.",
	op1:"Si, en la medida que el Código Civil señala que se puede hacer todo lo que la ley no prohíba, considerando que la Ley de Contrataciones del Estado no prohíbe la suscripción de dicha adenda.",
	op2:"No, por cuanto las Entidades Públicas solo pueden contratar los servicios de carácter permanente por el plazo de un año, como máximo.",
	op3:"No, por cuanto, bajo el Principio de Legalidad, el servidor público desarrolla sus funciones dentro de las facultades que le son conferidas, siendo que la suscripción de dicha adenda no se encuentra recogida en la normativa de contratación estatal.",
	correcta:"3"
	},
	{
	id:19,
	pregunta:"Con relación a la conformidad, identifique el enunciado incorrecto.",
	op0:"La recepción y la conformidad es responsabilidad del área usuaria.",
	op1:"La conformidad requiere de un informe de funcionario responsable del área usuaria.",
	op2:"En el caso de bienes, la recepción es responsabilidad del área de almacén y la conformidad es responsabilidad de quien se indique en los documentos del procedimiento de selección.",
	op3:"La conformidad de la prestación es responsabilidad del órgano de administración o del funcionario designado expresamente por la Entidad, quien es el único autorizado a otorgarla al contratista.",
	correcta:"2"
	},
	{
	id:20,
	pregunta:"Acerca de la Contratación Complementaria se puede afirmar.",
	op0:"No es un nuevo contrato en la medida que depende del contrato original.",
	op1:"Puede contratarse prestaciones hasta por un 25%.",
	op2:"El contratista está obligado a suscribir dicho contrato.",
	op3:"N.A.",
	correcta:"3"
	},
	{
	id:21,
	pregunta:"Marque la afirmación verdadera respecto a la modificación de contrato:",
	op0:"Las reducciones no son modificaciones de contrato.",
	op1:"Cuando la modificación implique variación del precio, debe ser aprobado por el Titular de la Entidad.",
	op2:"Siempre que haya modificación de contrato se debe efectuar una adenda al mismo.",
	op3:"La modificación del contrato solo es procedente en virtud de adicionales, reducciones y ampliaciones de plazo.",
	correcta:"1"
	},
	{
	id:22,
	pregunta:" Sobre la formalidad y requisitos para el perfeccionamiento del contrato, identifique la respuesta correcta:",
	op0:"El contrato se puede perfeccionar también con la recepción de la orden de compra o de servicios, cuando el valor supere los cien mil nuevos soles (S/100,000.00) en el caso de subasta inversa.",
	op1:"En el caso de procedimientos de selección por relación de ítems, se puede perfeccionar el contrato con la recepción de una orden de compra, cuando el monto del valor del ítem corresponda a la adjudicación simplificada.",
	op2:"En los procedimientos de subasta inversa electrónica y adjudicación simplificada para bienes y servicios en general, el contrato se puede perfeccionar con la recepción de la orden de compra o de servicios, siempre que el monto del valor no supere los cien mil soles (100,000.00)",
	op3:"El contrato se puede perfeccionar también con la recepción de la orden de compra o de servicios, cuando el valor supere los cien ml Nuevos Soles (S/ 100,000.00), en el caso de subasta inversa.",
	correcta:"2"
	},
	{
	id:23,
	pregunta:"¿La decisión de la entidad de aprobar prestaciones adicionales en un contrato de bienes, es susceptible de ser sometida a arbitraje?",
	op0:"No, las decisiones de la Entidad de aprobar o no la ejecución de prestaciones adicionales, no pueden ser sometidas a arbitraje.",
	op1:"Sí se puede someter a arbitraje, siempre que previamente se haya seguido un procedimiento de conciliación, que haya concluido sin acuerdo total o un acuerdo parcial.",
	op2:"Sí, resulta arbitraje, aunque tendrá que sustentar dicha situación ante el Tribunal arbitral.",
	op3:"No, no puede someterse a arbitraje, solo son susceptibles de conciliarse.",
	correcta:"0"
	},
	{
	id:24,
	pregunta:"Para la ejecución de un saldo de obra de un contrato resuelto a causa de Contratista.",
	op0:"La Entidad deberá efectuar la liquidación y pago del contrato resuelto antes de la ejecución del saldo de la obra.",
	op1:"La Entidad deberá recurrir a un contrato complementario.",
	op2:"La Entidad deberá seguir el procedimiento previsto en la normativa vigente para iniciar la contratación que tenga por objeto la ejecución de dicho saldo.",
	op3:"La Entidad deberá convocar algún procedimiento de selección.",
	correcta:"2"
	},
	{
	id:25,
	pregunta:"Cuando existe la necesidad urgente de culminar las prestaciones pendientes en caso de resolución de contrato, identifique la respuesta correcta:",
	op0:"Se puede contratar a alguno de los postores que participaron el procedimiento de selección, siempre que no haya sometido a arbitraje de resolución del contrato.",
	op1:"La Entidad debe obligatoriamente realizar un nuevo procedimiento de selección por las prestaciones pendientes de ejecutar.",
	op2:"Se debe invitar al quedó segundo en el orden de prelación del procedimiento de selección para suscribir contrato, considerado el mismo precio de su oferta.",
	op3:"La Entidad invita a los postores que participaron en el procedimiento de selección, para que manifiesten su intención de ejecutar las prestaciones pendientes por el precio y condiciones establecidas en la invitación.",
	correcta:"3"
	},
	{
	id:26,
	pregunta:"Sobre la resolución de contrato, identifique la respuesta correcta:",
	op0:"La entidad puede resolver el contrato sin requerir previamente el cumplimiento al contratista, cuando este haya acumulado en máximo de la penalidad.",
	op1:"Los contratos suscritos en el marco de la normativa de contrataciones no se pueden resolver por caso fortuito o fuerza mayor imposibilite la continuación del contrato.",
	op2:"El contratista no puede requerir la resolución del contrato en los casos que la Entidad incumpla injustificadamente el pago.",
	op3:"Si alguna de las partes falta al cumplimiento de sus obligaciones, la parte perjudicada debe requerir que las ejecute mediante carta simple.",
	correcta:"0"
	},
	{
	id:27,
	pregunta:"El límite cuantitativo para los adicionales en bienes y servicios es de:",
	op0:"El 15% del monto del contrato original.",
	op1:"El 15% del monto del contrato vigente.",
	op2:"El 50% del monto del contrato original.",
	op3:"El 25% del monto del contrato original.",
	correcta:"3"
	},
	{
	id:28,
	pregunta:"Un contratista no cumple dentro del plazo otorgado por una Municipalidad provincial con subsanar tres (3) de las quince (15) observaciones que la Entidad formulo al inventario de bienes patrimoniales que presento. Ante esta situación la Entidad procede a otorgar la conformidad porque necesita con urgencia enviar con dicho inventario. Señale la alternativa correcta:",
	op0:"La Entidad no actuó correctamente porque no debió otorgar la conformidad hasta que el contratista haya subsanado todas las observaciones formuladas.",
	op1:"La Entidad no actuó correctamente porque debió otorgarle un plazo adicional para subsanar las observaciones que faltaban, pero no aplica ninguna penalidad.",
	op2:"La Entidad actuó correctamente al otorgar la conformidad porque necesitaba con urgencia enviar con dicho inventario, pero después aplicar las penalidades legales.",
	op3:"La Entidad actuó correctamente al otorgar la conformidad porque el contratista no subsano la quinta parte de las observaciones formuladas por la Entidad.",
	correcta:"0"
	},
	{
	id:29,
	pregunta:"En un contrato de servicio de transporte de material didáctico, cuyo plazo de ejecución es de 5 días, el contratista solicita ampliación de plazo de 3 días, debido a que ya no cuenta con los vehículos para transportar el material didáctico, por encontrarse vencida, la revisión técnica. La entidad se tarda más de 10 días hábiles en resolver y notificar la resolución que deniega dicha ampliación de plazo. Señala la alternativa correcta:",
	op0:"La entidad no generó perjuicio económico al estado porque denegó la ampliación de plazo.",
	op1:"Al demorar la entidad en resolver la solicitud de ampliación de plazo, causo un perjuicio económico al estado, porque perdió la potestad de aplicar penalidades pero no debe pagar al contratista gastos generales.",
	op2:"Al demorar la Entidad en resolver la solicitud de ampliación de plazo, causo un perjuicio económico al Estado porque se debe pagar al contratista gastos generales debidamente acreditados, pero no debe aplicar penalidades.",
	op3:"Al demorar la Entidad en resolver la solicitud de ampliación de plazo, causo un perjuicio económico porque debe pagar al contratista gastos generales y perdió la potestad de aplicarse penalidades.",
	correcta:"2"
	},
	{
	id:30,
	pregunta:"Las controversias en relación a los pagos a cuenta o pagos finales pueden ser sometidas a:",
	op0:"Recurso de Apelación.",
	op1:"Junta de Resolución de Disputas.",
	op2:"Conciliación",
	op3:"Conciliación y Arbitraje",
	correcta:"3"
	},
	{
	id:31,
	pregunta:"Respecto del registro de la ejecución contractual en el SEACE seleccione la alternativa incorrecta",
	op0:"Se registran los adicionales de los contratos.",
	op1:"Se registran los contratos complementarios.",
	op2:"Todos los contratos de procedimientos de selección deben ser registrados en el SEACE.",
	op3:"Los contratos y las órdenes de compra o de servicios se debe realizar en un plazo máximo de 20 días hábiles siguientes a su perfeccionamiento.",
	correcta:"3"
	},
	{
	id:32,
	pregunta:"En un contrato para la adquisición de escritorios, cuyo plazo de ejecución es de 30 días, el contratista solicita ampliación de plazo de 10 días, debido a que no tuvo tiempo para fabricarlos. La entidad se tarda más de 10 días hábiles en resolver y notificar la resolución que deniega dicha ampliación de plazo. Señala la alternativa correcta:",
	op0:"Al demorar la Entidad en resolver la solicitud de ampliación de plazo, causo un perjuicio económico al Estado porque se debe pagar al contratista gastos generales y perdió la potestad de aplicarle penalidades.",
	op1:"Al demorar la entidad en resolver la solicitud de ampliación de plazo, causo un perjuicio económico al estado, porque perdió la potestad de aplicar penalidades pero no debe pagar al contratista gastos generales.",
	op2:"Al demorar la Entidad en resolver la solicitud de ampliación de plazo, causo un perjuicio económico porque debe pagar al contratista gastos generales y perdió la potestad de aplicarse penalidades.",
	op3:"La entidad no generó perjuicio económico al estado porque denegó la ampliación de plazo.",
	correcta:"0"
	},
	{
	id:33,
	pregunta:"En un contrato de servicio de transporte de material didáctico, cuyo plazo de ejecución es de 5 días, el contratista solicita ampliación de plazo de 3 días, debido a que ya no cuenta con los vehículos para transportar el material didáctico, por encontrarse vencida, la revisión técnica. La entidad se tarda más de 10 días hábiles en resolver y notificar la resolución que deniega dicha ampliación de plazo. Señala la alternativa correcta:",
	op0:"La entidad no generó perjuicio económico al estado porque denegó la ampliación de plazo.",
	op1:"Al demorar la entidad en resolver la solicitud de ampliación de plazo, causo un perjuicio económico al estado, porque perdió la potestad de aplicar penalidades pero no debe pagar al contratista gastos generales.",
	op2:"Al demorar la Entidad en resolver la solicitud de ampliación de plazo, causo un perjuicio económico al Estado porque se debe pagar al contratista gastos generales debidamente acreditados, pero no debe aplicar penalidades.",
	op3:"Al demorar la Entidad en resolver la solicitud de ampliación de plazo, causo un perjuicio económico porque debe pagar al contratista gastos generales y perdió la potestad de aplicarse penalidades.",
	correcta:"2"
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

    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    window.scrollTo(0,0);
    //colocamos la cantidad que acertoy las que no acertó
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (34-cantiCorrectas) + " INCORRECTAS";
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