//base de datos local de preguntas
const bd_juego = [
	{
	id:0,
	pregunta:"En un(a) _____________ para la contratación de servicios de consultoría, el comité de selección debe estar conformado por _____________. Señale la alternativa correcta para completar los espacios en blanco.",
	op0:"Contratación directa, un (01) miembro del órgano encargado de las contrataciones.",
	op1:"Selección de consultores individuales, un (01) miembro del órgano encargado de las contrataciones.",
	op2:"Comparación de precios, dos (02) miembros del órgano encargado de las contrataciones.",
	op3:"Selección de consultores individuales, dos (02) miembros del órgano encargado de las contrataciones.",
	correcta:"1"
	},
	{
	id:1,
	pregunta:"Establezca la relación correcta entre el número y la letra respecto a la determinación del método de contratación que corresponda: 1. Subasta Inversa Electrónica	2. Catalogo Electrónico de Acuerdo Marco 3. Adjudicación Simplificada a. Adquisición de cemento por el monto de S/ 200 000.00. b. Contratación del Seguro Obligatorio de Accidentes de Tránsito (SOAT) por el monto de S/ 60 000.00. c. Adquisición de frazadas por el monto de S/ 80 000.00. d. Contratación del Seguro Complementario de Trabajo de Riesgo (SCTR) por el monto de S/ 100 000.00.",
	op0:"1a, 1b, 2c, 3d",
	op1:"1a, 2c, 3b, 3d",
	op2:"1a, 1b, 1d, 2c",
	op3:"3a, 3b, 3c, 3d",
	correcta:"0"
	},
	{
	id:2,
	pregunta:"El Ministerio PRIMERO TU SALUD desea realizar una contratación con un proveedor no domiciliado en el país, donde no se van a utilizar los métodos de contratación previstos en la normativa de contrataciones del Estado por encontrarse del supuesto excluido del ámbito de aplicación sujeto a supervisión prevista en el literal f) dela artículo 5, la consulta es la siguiente ¿El proveedor debe encontrase inscrito en el RNP? ",
	op0:"Sí, porque todas las personas naturales o jurídicas, nacionales o extranjeras que desean participar en procedimientos de selección y/o contratar con el Estado están en  la obligación de tener RNP.",
	op1:"Sí, porque las personas jurídicas extranjeras no domiciliadas en el Perú para la provisión de bienes y servicios deben cumplir con las disposiciones del Reglamento de contrataciones.",
	op2:"Depende, si supera una (01) UIT la contratación si está obligado a presentar el RNP.",
	op3:"No, porque es un supuesto excluido del ámbito de aplicación",
	correcta:"3"
	},
	{
	id:3,
	pregunta:"De la revisión del requerimiento, se advierte que, se exige una (1) camioneta 4 x 4 doble cabina, sin embargo, no se ha precisado las características de la camioneta. ¿Qué principio se ha vulnerado?",
	op0:"Principio de Publicidad",
	op1:"Principio de Libertad de Concurrencia",
	op2:"Principio de Transparencia",
	op3:"Principio de Igualdad de trato",
	correcta:"2"
	},
	{
	id:4,
	pregunta:"De la revisión de los requisitos para la suscripción del contrato se advierte que, se requiere la presentación de una 'declaración jurada de cada personal propuesto señalando que no se encuentra trabajando en otra Entidad Pública o Privada y que no lo realizará durante la prestación de sus servicios en la ejecución de la presente obra, adjuntado copia legible de su DNI (Documento Nacional de Identidad)'. ¿Qué principio se ha vulnerado?",
	op0:"Principio de Competencia",
	op1:"Principio de Libertad de Concurrencia",
	op2:"Principio de Transparencia",
	op3:"Principio de Igualdad de trato",
	correcta:"1"
	},
	{
	id:5,
	pregunta:"En qué casos, se incurre en fraccionamiento.",
	op0:"Surge una necesidad imprevisible adicional a la programada.",
	op1:"No se contaba con los recursos disponibles suficientes para realizar la contratación",
	op2:"Se efectúe a través de los Catálogos Electrónicos de Acuerdo Marco.",
	op3:"Cuando contando con recursos disponibles no se realice una compra consolidada.",
	correcta:"3"
	},
	{
	id:6,
	pregunta:"¿Quiénes están impedidos de integrar un Comité de Selección?",
	op0:"El Jefe de Logística",
	op1:"El servidor que por delegación haya aprobado el expediente de contratación del procedimiento de selección.",
	op2:"El Administrador, quien está a cargo de la aprobación de los requerimientos.",
	op3:"Aquel integrante del área usuaria que tenga intervención directa en la determinación de las características técnicas.",
	correcta:"1"
	},
	{
	id:7,
	pregunta:"Son funciones del Órgano Encargado de las Contrataciones (marque la opción correcta)",
	op0:"Estar a cargo de la subasta inversa electrónica, la adjudicación simplificada para bienes, servicios en general y consultoría en general, la comparación de precios y la contratación directa.",
	op1:"Aprobar el Cuadro Consolidado de Necesidades y el Presupuesto Institucional de Apertura (PIA)",
	op2:"Supervisar y fiscalizar la labor de los miembros del Comité Especial, pudiendo incluso amonestarlos en caso fuere necesario.",
	op3:"Custodiar el Expediente de Contratación sólo de los procedimientos de selección a su cargo, ordenando, archivando y preservando la documentación que respalda las actuaciones realizadas.",
	correcta:"0"
	},
	{
	id:8,
	pregunta:"En el estudio de mercado, el órgano encargado de las contrataciones determina que las cantidades no se encuentran perfectamente definidas, atendiendo a ello se le comunica al área usuaria que precise sus características técnicas indicando:",
	op0:"Que corresponde utilizar el sistema de suma alzada.",
	op1:"Que corresponde utilizar el sistema de llave de mano.",
	op2:"Que corresponde utilizar el sistema de precios unitarios.",
	op3:"Que corresponde utilizar el concurso oferta.",
	correcta:"2"
	},
	{
	id:9,
	pregunta:"Cuando los requerimientos comprendan prestaciones de diversa naturaleza, como por ejemplo bienes y servicios, el objeto de la contratación se determina en función a la prestación:",
	op0:"De mayor incidencia porcentual en el valor referencial de la contratación.",
	op1:"De mayor importancia para la Entidad.",
	op2:"De menor incidencia porcentual en el valor referencial de la contratación.",
	op3:"De menor incidencia porcentual para adquirir.",
	correcta:"0"
	},
	{
	id:10,
	pregunta:"No pertenece a los sistemas de contratación:",
	op0:"Tarifas",
	op1:"En Base a porcentajes",
	op2:"A Suma Alzada",
	op3:"Llave en mano",
	correcta:"3"
	},
	{
	id:11,
	pregunta:"¿Tratándose de un convenio Interinstitucional previsto en el literal artículo 5° de la Ley de Contrataciones del Estado, que no requiera de un Certificado de Crédito Presupuestario, al no representar costo alguno para la Entidad, existiera la obligación de incluir el referido Convenio en el Plan Anual de Contrataciones PAC de la entidad?",
	op0:"Depende de la entidad.",
	op1:"Si",
	op2:"No",
	op3:"Depende del órgano Encargado de las Contrataciones.",
	correcta:"2"
	},
	{
	id:12,
	pregunta:"No es un documento de gestión a las contrataciones del Estado.",
	op0:"Plan anual de contrataciones.",
	op1:"Presupuesto Institucional de Apertura.",
	op2:"Plan Operativo Institucional.",
	op3:"Reglamento Interno de Trabajo.",
	correcta:"3"
	},
	{
	id:13,
	pregunta:"Es el responsable de consolidar y valorizar el Cuadro de Necesidades",
	op0:"Órgano encargado de las contrataciones.",
	op1:"Área usuaria.",
	op2:"Oficina de Administración.",
	op3:"Oficina de Presupuesto.",
	correcta:"0"
	},
	{
	id:14,
	pregunta:"Sobre los Requerimientos de Contratación (marque la opción correcta):",
	op0:"El requerimiento de bienes o servicios en general de carácter permanente, cuya provisión se requiera de manera continua realiza por periodos no menores a un (1) año.",
	op1:"No forman parte del requerimiento las Especificaciones Técnicas y Términos de Referencia, los mismos que son instrumentos formales distintos.",
	op2:"En la definición del requerimiento puede hacerse referencia indistintamente a fabricación o procedencia, procedimiento de fabricación de marcas, patentes o tipos de producto, origen o producción determinados, en la medida en que hagan más eficiente la contratación con un determinado proveedor.",
	op3:"El requerimiento no puede incluir requisitos de calificación de ningún tipo.",
	correcta:"0"
	},
	{
	id:15,
	pregunta:"Señale cuál del siguiente tipo de contratos no se aplica la Ley 30225 á Ley de Contrataciones del Estado á, su Reglamento de normas complementarias:",
	op0:"La elaboración de un estudio de pre inversión para la construcción de una comisaría.",
	op1:"Adquisición de equipos de cómputo.",
	op2:"Contratación de servicios de consultaría para el análisis de una norma.",
	op3:"Concesión de una carretera.",
	correcta:"3"
	},
	{
	id:16,
	pregunta:"En relación al Comité de selección, marque la afirmación verdadera.",
	op0:"El comité de selección solo conducirá la Selección de Consultores y la Comparación de Precios.",
	op1:"El comité de Selección en el caso de contratación de obras y consultoría de obras y consultoría debe estar conformado por un (1) miembro que posea conocimiento técnico en el objeto de la contratación.",
	op2:"El comité de selección debe conducir obligatoriamente Licitaciones, Concursos Públicos, Selección de Consultores individuales y Adjudicación Simplificada para obras y consultorías.",
	op3:"El comité de Selección conducirá todos los mecanismos de selección.",
	correcta:"2"
	},
	{
	id:17,
	pregunta:"Señale usted la respuesta correcta.",
	op0:"En el sistema de precios unitarios se debe conocer con exactitud o precisión las cantidades o magnitudes requeridas.",
	op1:"El sistema de esquema mixto de suma alzada y precios unitarios es aplicable solo para las consultorías en general y supervisión de obras.",
	op2:"El sistema de suma alzada no aplica para la ejecución de obra.",
	op3:"En el sistema en base a un honorario fijo una comisión de éxito, el honorario y la comisión pueden calcularse en base a porcentajes.",
	correcta:"3"
	},
	{
	id:18,
	pregunta:"Tratándose de la contratación de bienes, las Bases Administrativas han consignado que los ´postores deberán acreditar una experiencia del postor equivalente a 2.5 veces el valor referencial de la contratación.",
	op0:"El proceso es nulo, por cuanto se debería hacer mención a valor referencial.",
	op1:"Se encuentra correctamente formulado, toda vez que está dentro del límite tres (3) veces al valor referencial permitido en las Bases Estándar.",
	op2:"El proceso es nulo, toda vez que la experiencia del postor constituye un Requisito de calificación considerado opcional.",
	op3:"No se encuentra formulado de manera correcta, por cuanto se debe indicar en número y letras el monto correspondiente a la Experiencia del Postor que debe ser acreditada.",
	correcta:"1"
	},
	{
	id:19,
	pregunta:"Corresponde establecer el Valor Referencial cuando se determine la contratación de:",
	op0:"Bienes, Servicios en general, Consultoría y Ejecución de Obras.",
	op1:"Consultorías en General y Consultorías de Obras.",
	op2:"Servicios en General y Consultorías en General.",
	op3:"Consultorías de obras y Ejecución de Obras.",
	correcta:"0"
	},
	{
	id:20,
	pregunta:"Ante la ausencia de un miembro titular del Comité de Selección, su respectivo suplente actúa:",
	op0:"Hasta la fecha de suscripción del contrato respectivo.",
	op1:"Solo en tanto el titular esté ausente, reincorporándose este automáticamente cuando cesa el motivo de su ausencia.",
	op2:"Solo en tanto el titular esté ausente, reincorporándose previa justificación del motivo de ausencia.",
	op3:"De ahí en adelante hasta la culminación del procedimiento de selección.",
	correcta:"1"
	},
	{
	id:21,
	pregunta:"Respecto al Comité de Selección, indicar la respuesta falsa:",
	op0:"Los integrantes del comité de selección solo pueden ser removidos por caso fortuito o fuerza mayor, por cese en el servicio, u otra justificada, mediante documento debidamente motivado.",
	op1:"Para sesionar y adoptar acuerdos válidos el quórum para el funcionamiento del Comité de selección se da con la presencia de la mayoría de miembros titulares.",
	op2:"La designación del comité de selección es notificada por la Entidad a cada uno de los miembros.",
	op3:"El comité de selección está integrado por tres (3) miembros, de los cuales uno (1) debe pertenecer al órgano encargado de las contrataciones de la Entidad y por lo menos uno (1) debe tener conocimiento técnico e el objeto de la contratación.",
	correcta:"1"
	},
	{
	id:22,
	pregunta:"¿Se puede incluir en el requerimiento disposiciones previstas en normas técnicas de carácter voluntario?",
	op0:"No, debido a que el OSCE ha indicado en Pronunciamiento que está prohibido.",
	op1:"No, dado que no forman parte del ordenamiento jurídico nacional.",
	op2:"Sí, siempre que existe en el mercado algún organismo que pueda acreditar el cumplimiento de dicha norma técnica y no contraventa normas de carácter obligatorio.",
	op3:"Sí, siempre que no contravenga ninguna norma nacional obligatoria y esté autorizada expresamente por INACAL (INDECOPI).",
	correcta:"2"
	},
	{
	id:23,
	pregunta:"¿Los requisitos de calificación tienen como finalidad mejorar las características del producto requerido por la entidad?",
	op0:"Sí, porque son parte de los requisitos técnicos mínimos.",
	op1:"Los documentos del procedimiento deben contemplar los requisitos de calificación, según las cuales se verificará que los proveedores cuenten con las capacidades necesarias para ejecutar el contrato.",
	op2:"Todos los requisitos de calificación son facultativos por ende no tienen como finalidad mejorar las características del producto.",
	op3:"Si, los requisitos de calificación cumplen un papel similar que los factores de evaluación.",
	correcta:"1"
	},
	{
	id:24,
	pregunta:"Para la contracción de bienes y servicios, el Comité de Selección debe estar conformado.",
	op0:"Un miembro del Órgano encargado de las contrataciones y un miembro del área usuaria.",
	op1:"Dos miembros del Órgano encargado de las contrataciones y un miembro del área usuaria.",
	op2:"Un miembro del Órgano encargado de las contrataciones y por lo menos un miembro con conocimiento del objeto de contratación.",
	op3:"Un miembro del Órgano encargado de las contrataciones y dos miembros del área usuaria.",
	correcta:"2"
	},
	{
	id:25,
	pregunta:"Las etapas del proceso de contratación con el Estado son:",
	op0:"La planificación y actuaciones preparatorias, los métodos de contratación y la ejecución contractual.",
	op1:"La preinversión, las actuaciones preparatorias, el proceso de selección y el contrato.",
	op2:"La preinversión, el proceso de selección y la ejecución contractual.",
	op3:"La planificación, la pre inversión, los métodos, de contratación y la ejecución contractual.",
	correcta:"0"
	},
	{
	id:26,
	pregunta:"¿Cómo se puede acreditar la capacidad legal de una persona natural?",
	op0:"Con copia legalizada del DNI.",
	op1:"No requiere acreditarse, basta contra con 18 años.",
	op2:"Con copia simple del DNI o documento análogo.",
	op3:"Con copia legalizada del DNI y autorización del cónyuge, si es casado.",
	correcta:"2"
	},
	{
	id:27,
	pregunta:"Con relación a los requisitos de calificación:",
	op0:"En todos los procedimientos de selección se debe exigir experiencia del postor, con excepción de la contratación de bienes que no revisa complejidad.",
	op1:"La Entidad puede imponer requisitos distintos a los señalados en los documentos estándar aprobados por el OSCE.",
	op2:"La Entidad no puede imponer requisitos distintos a los señalados en los documentos estándar aprobados por el OSCE.",
	op3:"Queda al criterio de la Entidad establecer requisitos de calificación.",
	correcta:"2"
	},
	{
	id:28,
	pregunta:"Una Municipalidad Provincial de la Sierra Sur requiere adquirir volquetes para ejecutar obras, al momento de formular los factores de evaluación el comité de selección establece que otorgara un puntaje de veinte (20) puntos sobre 100 a los postores que ofrezcan disponibilidad de servicios y repuestos en provincias de otras regiones del país. Señale la alternativa correcta.",
	op0:"El comité de selección al momento de formular como factor de evaluación la disponibilidad de servicios y repuestos no debió otorgar puntaje por ofrecer disponibilidad en provincias de otras regiones.",
	op1:"El comité de selección tiene la potestad de formular como factor de evaluación la disponibilidad de servicios y repuestos y de establecer el puntaje respectivo siempre y cuando no sea mayor a cincuenta (50) puntos.",
	op2:"El comité de selección tiene la potestad de formular factores de evaluación sin embargo la normativa de contrataciones no prevé establecer la disponibilidad de servicios y repuestos como factor de evaluación para Servicios en General.",
	op3:"El comité de selección tiene la potestad de formular como factor de evaluación la disponibilidad de servicios y repuestos y de establecer puntaje respectivo siempre y cuando no sea mayor a diez (10) puntos",
	correcta:"2"
	},
	{
	id:29,
	pregunta:"El hermano de un Vocal de la Corte Suprema suscribe un contrato con un Ministerio para prestar el servicio de fotocopiado de expedientes por el monto de S/. 100,000.00",
	op0:"Se configura una causal para que el contrato se declare nulo, porque fue suscrito por una persona que estaba impedida de contratar con el ministerio.",
	op1:"Se configura una causal para que el contrato se resuelva parcialmente, porque fue suscrito por una persona que estaba impedida de contratar con el ministerio.",
	op2:"Se configura una causal para que el contrato se resuelva totalmente, porque fue suscrito por una persona que estaba impedida de contratar con el ministerio.",
	op3:"No se configura ninguna causal para que el contrato se resuelva o se declare nulo porque el hermano del vocal no está impedido de contratar con el ministerio.",
	correcta:"0"
	},
	{
	id:30,
	pregunta:"El/La …………..………… debe contener necesariamente la Certificación Presupuestal siendo este el último paso para su ………….........................",
	op0:"Bases, aprobación",
	op1:"Requerimiento, pase a el OEC",
	op2:"Expediente de Contratación, aprobación,",
	op3:"Plan Anual de Contrataciones, aprobación.",
	correcta:"2"
	},
	{
	id:31,
	pregunta:"El OEC ha incluido en el cuadro de necesidades el Servicio de Notarios Públicos para que asistan en los actos públicos de los procedimientos de contratación, el cual luego de los estudios de mercado, se valora en S/ 80, 000 (Ochenta Mil soles). Indique Usted, como se considerará esta contratación en el PAC.",
	op0:"Adjudicación Simplificada porque es un servicio que no supera los topes de las AS.",
	op1:"Selección de Consultores individuales, ya que es una consultoría ejecutada por una persona y no supera los 100,000 soles (Cien mil soles)",
	op2:"Contratación Directa porque es un servicio personalísimo.",
	op3:"No se considera en el PAC, en la medida que la contratación de notarios públicos para que ejerzan las funciones previstas en la LCE y su Reglamento.",
	correcta:"3"
	},
	{
	id:32,
	pregunta:"En una ………………………………………….para la contratación de consultoría de obras……………………el comité de selección debe estar conformado por………………………..señale la alternativa correcta para completar los espacios en blanco.",
	op0:"Licitación Pública, (02) miembros deben ser el área usuaria y (01) del OEC",
	op1:"Concurso Público, (02) miembros deben tener conocimiento técnico en el objeto de la contratación y (01) debe ser OEC",
	op2:"Selección de Consultores individuales, (01) miembro debe tener conocimiento técnico en el objeto de la contratación y (01) debe ser OEC.",
	op3:"Contratación directa, (02) miembros deben ser el área usuaria y (01) del OEC",
	correcta:"1"
	},
	{
	id:33,
	pregunta:"Para incluir un requerimiento en el proyecto de Plan Anual de Contrataciones, qué características NO debe tener?:",
	op0:"Debe ser elaborado sobre la base del proyecto del POI",
	op1:"Debe incluir la finalidad pública de la contratación",
	op2:"Indicar la cantidad de bienes",
	op3:"Hacer referencia a marca",
	correcta:"3"
	},
	{
	id:34,
	pregunta:"Para la adquisición de un microscopio electrónico de barrido, las especificaciones técnicas no han establecido el requisito de calificación de capacidad técnica y profesional. Al respecto, corresponde señalar lo siguiente:",
	op0:"El requisito de calificación de capacidad técnica y profesional es facultativo, el no cumplimiento amerita únicamente la no asignación del puntaje señalado en las bases.",
	op1:"El Comité de Selección no puede determinar ningún requisito de calificación, porque estos son fijados por el área usuaria en el requerimiento.",
	op2:"El Comité de Selección en las bases debe solicitar la carta de compromiso del personal clave con firma legalizada para garantizar la debida ejecución de la contratación, al ser un equipo sofisticado.",
	op3:"El Comité de Selección debe completar el requisito de calificación señalado bajo el enfoque de gestión por resultados, independientemente si está o no en el expediente de contratación, bajo responsabilidad.",
	correcta:"1"
	},
	{
	id:35,
	pregunta:"El artículo 14° del Reglamento de la Ley de Contrataciones del Estado, establece los Sistemas de Contratación, a que sistema corresponde: El postor formulará su oferta por un monto fijo integral y por un determinado plazo de ejecución.",
	op0:"Sistema a Precios Unitarios",
	op1:"Sistema a Suma Alzada",
	op2:"Sistema mixto de Suma Alzada y Precios Unitarios",
	op3:"Porcentajes",
	correcta:"1"
	},
	{
	id:36,
	pregunta:"¿En cuál de los siguientes casos se debe designar necesariamente un Comité de Selección?",
	op0:"Compras iguales o menores a ocho (8) Unidades Impositivas Tributarias",
	op1:"Contratación Directa para el Alquilar de Bien Inmueble",
	op2:"Adjudicación Simplificada para la Construcción de una Carretera",
	op3:"Subasta Inversa Electrónica para la Adquisición de Combustible",
	correcta:"2"
	},
	{
	id:37,
	pregunta:"En cuanto a la fase de Planificación y Actuaciones Preparatorias, señale la afirmación correcta",
	op0:"Se pueden designar Comités de Selección Permanentes para los procedimientos de selección de bienes y servicios en general.",
	op1:"Para la contratación de bienes, servicios en general, consultoría en general y consultoría de obras se debe determinar el valor estimado, y para la ejecución de obras el valor referencial.",
	op2:"Para la elaboración del cuadro de necesidades las áreas usuarias deben indicar únicamente la denominación de cada contratación requerida.",
	op3:"El valor referencial no es una referencia que determine la descalificación de ofertas.",
	correcta:"3"
	},
	{
	id:38,
	pregunta:"Tratándose de bienes, las especificaciones técnicas mínimas no deben considerar:",
	op0:"Las metas y objetos del POI.",
	op1:"Lugar de entrega.",
	op2:"El plazo de ejecución del servicio",
	op3:"La finalidad pública",
	correcta:"2"
	},
	{
	id:39,
	pregunta:"Órgano colegiado competente para preparar los documentos del procedimiento de selección, así como para adoptar decisiones y realizar todo acto necesario para el desarrollo del procedimiento hasta su culminación:",
	op0:"Comité Especial Permanente",
	op1:"Comité Especial",
	op2:"Comité de Selección",
	op3:"Oficina de Administración",
	correcta:"2"
	},
	{
	id:40,
	pregunta:"Es el nuevo enfoque de la Ley de Contrataciones del Estado (Ley Nº 30225):",
	op0:"Gestión de Productos",
	op1:"Gestión por Conocimiento",
	op2:"Gestión por Resultados",
	op3:"Gestión Administrativa",
	correcta:"2"
	},
	{
	id:41,
	pregunta:"Es responsabilidad del registro de la información en el SEACE:",
	op0:"En todos los casos sólo del Titular de la Entidad",
	op1:"Del funcionario que hubiese solicitado la activación del certificado SEACE y del CERTIFICADO SEACE (aquél que cuenta con usuario y contraseñque hubiera registrado la información.",
	op2:"Sólo del funcionario que hubiese solicitado la activación del certificado.",
	op3:"De aquél que hubiera registrado la información.",
	correcta:"1"
	},
	{
	id:42,
	pregunta:"En la pantalla completa de la pestaña 'Inicio del Portal Web del SEACE, se tiene las siguientes secciones.",
	op0:"Subasta Inversa, Acuerdos Marco, Videos Tutoriales, Proyectos de ficha de homologación y Bases estandarizadas para procedimientos de selección.",
	op1:"Acuerdos Marco, Videos Tutoriales, Compras Corporativas, Contratos y Bases estandarizadas.",
	op2:"Subasta Inversa, Planes Anuales, Videos Tutoriales, Proyectos de ficha de homologación y CUBSO.",
	op3:"Procesos de Selección, Contratos, Documentos y Publicaciones, Videos Tutoriales y Compras Corporativas.",
	correcta:"2"
	},
	{
	id:43,
	pregunta:"Son los funcionarios, dependencias y órganos encargados de los procesos de contratación de la Entidad:",
	op0:"El Área Usuaria, el Órgano Encargado de las Contrataciones y los Comités de Selección que se designen.",
	op1:"El Titular de la Entidad, el Área Usuaria, el Órgano Encargado de las Contrataciones y los Comités de Selección que se designen.",
	op2:"El Área Usuaria y el Órgano Encargado de las Contrataciones.",
	op3:"El Titular de la Entidad es el encargado de los procesos de contratación de la Entidad, pero debe delegar su autoridad, según lo establece la Ley.",
	correcta:"1"
	},
	{
	id:44,
	pregunta:"Respecto la antigüedad del Valor Referencial para convocar un procedimiento de selección de ejecución de obras (marque la opción correcta):",
	op0:"En el caso de ejecución y consultoría de obras, el valor referencial no puede tener una antigüedad mayor a los tres (3) meses, contados a partir de la fecha de consignación de dicho valor en el PAC.",
	op1:"En el caso de ejecución y consultoría de obras, el valor referencial no puede tener una antigüedad mayor a los seis (6) meses, contados a partir de la fecha de determinación del presupuesto de obra o del presupuesto de consultoría de obra.",
	op2:"En el caso de bienes, servicios y obras, el valor referencial no puede tener una antigüedad mayor a los seis (6) meses, contados a partir de la fecha de determinación del presupuesto de obra o del presupuesto de consultoría de obra.",
	op3:"El valor referencial puede actualizarse incluso con posterioridad a la convocatoria, pero antes de la etapa de inscripción de participantes.",
	correcta:"1"
	},
	{
	id:45,
	pregunta:"Sobre el Valor Referencial, marque la opción correcta:",
	op0:"Es determinado por el Área Usuaria, sobre la base de las especificaciones técnicas de bienes o términos de referencia de servicios, distintos",
	op1:"El OEC tiene la obligación de realizar estudios de mercado para determinar el valor referencial de la contratación que se requiere para la aprobación del PAC.",
	op2:"Al realizar el estudio de mercado, el OEC debe recurrir sólo a información existente sobre las contrataciones que se hubieran realizado el sector público, respecto de bienes o servicios que guarden similitud con el requerimiento.",
	op3:"Ninguna de las anteriores",
	correcta:"1"
	},
	{
	id:46,
	pregunta:"No es un documento del procedimiento de selección:",
	op0:"Acuerdo Marco",
	op1:"Bases",
	op2:"Solicitud de cotización",
	op3:"Solicitud de expresión de interés",
	correcta:"0"
	},
	{
	id:47,
	pregunta:"Los actos realizados a través del SEACE durante los procedimientos de selección, se entienden notificados:",
	op0:"El mismo día de su publicación.",
	op1:"Al día hábil siguiente de su publicación.",
	op2:"Al día calendario siguiente de su publicación.",
	op3:"El día en que el Comité de Selección o el OSCE, según sea el caso, lo disponga.",
	correcta:"0"
	},
	{
	id:48,
	pregunta:"Sobre la finalidad de la Ley de Contrataciones del Estado:",
	op0:"Promover la actuación bajo el enfoque de gestión por resultados",
	op1:"Que permitan el cumplimiento de fines públicos",
	op2:"Establecer normas orientadas a maximizar el valor de los recursos públicos.",
	op3:"Todas las alternativas son correctas.",
	correcta:"0"
	},
	{
	id:49,
	pregunta:"La gestión de las contrataciones corresponde al:",
	op0:"Sistema Nacional de Presupuesto Público",
	op1:"Sistema de Abastecimiento",
	op2:"Sistema Nacional de Inversión Pública",
	op3:"Sistema Nacional de Administración de Bienes Estatales",
	correcta:"1"
	},
	{
	id:50,
	pregunta:"La conformación de los miembros del Comité de Selección para la contratación de ejecución de obras, consultoría en general y consultoría de obras es:",
	op0:"De los tres (03) miembros, por lo menos uno (01) debe contar con conocimiento técnico en el objeto de la contratación.",
	op1:"De los tres (03) miembros, por lo menos uno (01) debe ser del área usuaria.",
	op2:"De los tres (03) miembros, por lo menos dos (02) debe contar con conocimiento en contrataciones con el Estado.",
	op3:"De los tres (03) miembros, por lo menos dos (02) deben contar con conocimiento técnico en el objeto de la contratación.",
	correcta:"3"
	},
	{
	id:51,
	pregunta:"¿Quiénes están impedidos de integrar un Comité de Selección?",
	op0:"El Jefe de Logística",
	op1:"El servidor que por delegación haya aprobado el expediente de contratación del proceso de contratación.",
	op2:"El Administrador, quien está a cargo de la aprobación de los requerimientos.",
	op3:"Aquel integrante del área usuaria que tenga intervención directa en la determinación de las características técnicas.",
	correcta:"1"
	},
	{
	id:52,
	pregunta:"La certificación presupuestaria debe estar en:",
	op0:"Las Bases",
	op1:"El requerimiento",
	op2:"Expediente de Contratación",
	op3:"Plan Anual de Contrataciones",
	correcta:"2"
	},
	{
	id:53,
	pregunta:"¿Qué contrataciones no deben estar previstas en el PAC?",
	op0:"Las contrataciones que se realicen mediante acuerdo marco.",
	op1:"Las contrataciones que se realicen bajo el ámbito de un régimen legal de contratación que así lo establezca.",
	op2:"Las contrataciones que realicen otras Entidades como encargadas del procedimiento de selección o de compras corporativas.",
	op3:"La contratación de notarios públicos para que ejerzan las funciones previstas en la LCE y su Reglamento.",
	correcta:"2"
	},
	{
	id:54,
	pregunta:"En atención del literal del artículo 248 del Reglamento ¿Qué se entiende por otra circunstancia comprobable para impedir a un proveedor contratar con el estado?",
	op0:"Cualquier otra situación que permita determinar que una persona natural o jurídica es el testaferro de un proveedor impedido.",
	op1:"Cualquier otra situación que no permita determinar que una persona natural o jurídica es derivación, sucesión o tiene condición de testaferro de un proveedor impedido, siendo que, a través de esta, el proveedor no pretende eludir su condición de no impedido.",
	op2:"Cualquier otra situación que permita determinar que una persona natural o jurídica es derivación, sucesión o tiene condición de testaferro de un proveedor impedido, siendo que, a través de esta, el proveedor no pretende eludir su condición de impedido.",
	op3:"Cualquier otra situación que permita determinar que una persona natural o jurídica es derivación, sucesión o tiene condición de testaferro de proveedor impedido, siendo que, a través de esta, el proveedor pretende eludir su condición de impedido.",
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
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (55-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}