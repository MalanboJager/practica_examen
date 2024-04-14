//base de datos local de preguntas
const bd_juego = [
	{
	id:0,
	pregunta:"Un Gobierno regional convoca un concurso público para la contratación del servicio de internet. Un participante observa las bases debido a que solo se permite que participen proveedores domiciliados en dicha región, lo que considera que vulnera el principio de libertad de concurrencia, el principio de competencia y el principio de equidad. Al respecto, señale la alternativa correcta.",
	op0:"La observación del participante debe ser acogida parcialmente en la medida que en el caso planteado se vulnera el principio de libertad de concurrencia y el principio de competencia, pero no el principio de equidad.",
	op1:"La observación del participante debe ser acogida parcialmente en la medida que en el caso planteado se vulnera el principio de equidad y el principio de competencia, pero no el principio de libertad de concurrencia.",
	op2:"La observación del participante debe ser acogida parcialmente en la medida que en el caso planteado se vulnera el principio libertad de concurrencia y el principio de equidad, pero no el principio de competencia.",
	op3:"La observación del participante debe ser acogida en la medida que en el caso planteado se vulnera el principio de libertad de concurrencia, el principio de competencia y el principio de equidad.",
	correcta:"0"
	},
	{
	id:1,
	pregunta:"Usted es miembro de un comité de selección que está desarrollando un procedimiento para comprar materiales de construcción, la que fue declarada desierta en una oportunidad porque la empresa adjudicada ganadora no se presentó a suscribir el contrato. ¿Puede incluir en los documentos de procedimiento de selección de una indicación en el sentido que no podrá presentarse un postor que anteriormente no se haya presentado a firmar el contrato?",
	op0:"Si es posible porque debe evitarse la posibilidad de generar perjuicio económico a la entidad.",
	op1:"No es posible pero en caso se presentara la empresa que no firmó contrato se le permitirá participar, pero se le descalifica en la evaluación técnica bajo el supuesto de no haber suscrito el contrato en la primera convocatoria.",
	op2:"No es posible. Pero, en caso se presente al proceso la empresa que no suscribió contrato, el comité especial debe suspender el proceso y esperar la sanción del tribunal del OSCE.",
	op3:"No es posible. El comité especial deberá dejarlo participar pues no existe una sanción expresa del tribunal de OSCE que lo inhabilite a participar y contratar con el Estado.",
	correcta:"3"
	},
	{
	id:2,
	pregunta:"¿Cuál es el plazo para solicitar la elevación del pliego absolutorio de consultas y observaciones al OSCE en una adjudicación simplificada?",
	op0:"Tratándose de obras y consultoría de obras el plazo es de 3 días hábiles.",
	op1:"En la Adjudicación Simplificada no existe la posibilidad de solicitar la elevación del pliego de absolución de consultas y observaciones.",
	op2:"Tratándose de bienes y servicio en general el plazo es de 3 días hábiles.",
	op3:"Tratándose de Adjudicación Simplificada de Subasta Inversa el plazo será de 2 días hábiles.",
	correcta:"1"
	},
	{
	id:3,
	pregunta:"Las bases de un Concurso Público para Elaboración de Expediente Técnico de Obra no han considerado el factor de evaluación denominado ‘precio’. Al respecto corresponde indicar:",
	op0:"Si nadie lo observó es válido.",
	op1:"No hay problema pues dicho factor es facultativo para el caso de servicios en general.",
	op2:"No hay problema pues dicho factor es facultativo para el caso de consultoría de servicios.",
	op3:"Debería declarase la nulidad.",
	correcta:"3"
	},
	{
	id:4,
	pregunta:"En las bases de un concurso público convocado por una Universidad pública para el estudio sobre logros de aprendizaje por un monto de S/ 1 000 000.00, se establece como coeficiente de ponderación de la evaluación técnica 0.80, y como coeficiente de ponderación de la evaluación económica 0.20. Luego de la evaluación, el postor A obtiene un puntaje por evaluación técnica de noventa (90) puntos y oferta un monto de S/ 1 000 000 00. Y, por su parte, el postor B obtiene un puntaje por evaluación técnica de ochenta (80) puntos y oferta un monto de S/ 800 000 00. Señale la alternativa correcta respecto al puntaje total que obtendría cada postor.",
	op0:"El puntaje total del postor A sería de 88 puntos y del postor B sería de 84 puntos.",
	op1:"El puntaje total del postor A sería de 84 puntos y del postor B sería de 88 puntos.",
	op2:"El puntaje total del postor A sería de 92 puntos y del postor B sería de 82 puntos.",
	op3:"El puntaje total del postor A sería de 82 puntos y del postor B sería de 92 puntos.",
	correcta:"0"
	},
	{
	id:5,
	pregunta:"Es el tipo de procedimiento de selección que se convoca para contratar una persona natural para que brinde servicios de consultoría en general. Dicha persona natural no requiere de equipos de personal ni apoyo profesional adicional:",
	op0:"Licitación Pública.",
	op1:"Concurso Público.",
	op2:"Comparación de Precios.",
	op3:"Selección de Consultores Individuales.",
	correcta:"3"
	},
	{
	id:6,
	pregunta:"Para otorgar la buena pro en obras cuyas propuestas excedan el valor referencial, es correcto afirmar:",
	op0:"El plazo para otorgar la buena pro no excederá de cinco (5) días hábiles contados desde la fecha prevista en el calendario para el Otorgamiento de la Buena Pro, bajo responsabilidad del Titular de la Entidad.",
	op1:"El postor que obtuvo el mejor puntaje total puede reducir su oferta económica a un monto igual o menor al valor referencial.",
	op2:"En los procedimientos de selección realizados en acto público, la aceptación de reducir el monto de la propuesta deberá efectuarse en un plazo máximo de 10 días luego de otorgada la buena pro.",
	op3:"En los procedimientos de selección en acto privado la aceptación constará en el SEACE.",
	correcta:"1"
	},
	{
	id:7,
	pregunta:"En la fecha señalada en el acto público de presentación de ofertas, solamente se encuentran dos de los tres miembros del comité de selección. Dicho acto público se realizó con dos miembros, quienes indicaron que se encuentran presentes la mayoría de los miembros. Al respecto corresponde afirmar lo siguiente:",
	op0:"El acto de presentación de ofertas puede continuar si así lo permiten los postores.",
	op1:"Para realizar el acto público con dos miembros del comité de selección se requiere autorización del Órgano de Control Institucional para evitar futuras observaciones.",
	op2:"Según el enfoque de gestión por resultados, el acto de presentación de ofertas puede ser declarado nulo de oficio.",
	op3:"El acto de presentación de ofertas debe ser declarado nulo de oficio puesto que el quóroum para sesionar es con la totalidad de los miembros del comité de selección.",
	correcta:"3"
	},
	{
	id:8,
	pregunta:"¿Qué procedimiento de selección no se convoca a través del SEACE?",
	op0:"Licitación Pública.",
	op1:"Comparación de precios.",
	op2:"Concurso Público.",
	op3:"Adjudicación Simplificada.",
	correcta:"1"
	},
	{
	id:9,
	pregunta:"Para convocar un procedimiento de selección por regla general, se debe verificar previamente lo siguiente:",
	op0:"Que se publique las Bases al momento de la convocatoria.",
	op1:"Que el procedimiento de selección se encuentre incluido en el PAC.",
	op2:"Que se publique el resumen ejecutivo al momento de la convocatoria, excepto en el caso de obras.",
	op3:"Todas son correctas.",
	correcta:"3"
	},
	{
	id:10,
	pregunta:"Una Universidad quiere convocar ________________ para la contratación de un consultor que realice un estudio sobre el clima laboral. La secuencia del procedimiento de selección es: _____________, __________________ y ___________. Señale la alternativa correcta para completar los espacios en blanco:",
	op0:"Un concurso público, presentación de ofertas, admisión, calificación y evaluación de ofertas",
	op1:"Una adjudicación Simplificada, presentación de ofertas, admisión, evaluación y calificación de ofertas técnicas.",
	op2:"Un concurso público, presentación de ofertas, admisión, evaluación y calificación de ofertas técnicas",
	op3:"Una adjudicación simplificada, presentación de ofertas, evaluación, admisión y calificación de ofertas técnicas.",
	correcta:"0"
	},
	{
	id:11,
	pregunta:"La comparación de precios, puede utilizarse en:",
	op0:"Bienes",
	op1:"Bienes y servicios",
	op2:"Bienes, servicios y obras.",
	op3:"Ninguna de las anteriores",
	correcta:"1"
	},
	{
	id:12,
	pregunta:"En la Adjudicación Simplificada hay elevación de consultas y observaciones. Señale la alternativa correcta.",
	op0:"VERDADERO",
	op1:"FALSO",
	op2:"Falso, solo en bienes",
	op3:"Ninguna de las anteriores",
	correcta:"1"
	},
	{
	id:13,
	pregunta:"Mediante el procedimiento de Selección de Consultores Individuales, se puede contratar personas naturales para consultor de obras. Señale la alternativa correcta.",
	op0:"VERDADERO",
	op1:"FALSO",
	op2:"Falso, solo en servicios",
	op3:"Ninguna de las anteriores",
	correcta:"1"
	},
	{
	id:14,
	pregunta:"En bienes y servicios, en caso de empate en una Licitación Pública, corresponde el sorteo. Señale la alternativa correcta.",
	op0:"VERDADERO",
	op1:" Falso",
	op2:"Falso, solo en servicios",
	op3:"Ninguna de las anteriores",
	correcta:"0"
	},
	{
	id:15,
	pregunta:"La falta de firma legalizada es subsanable. Señale la alternativa correcta.",
	op0:"VERDADERO",
	op1:"FALSO",
	op2:"Verdadero solo en bienes",
	op3:"Ninguna de las anteriores",
	correcta:"0"
	},
	{
	id:16,
	pregunta:"En la oferta económica ante incongruencia entre número y letras, prevalece el número. Señale la alternativa correcta.",
	op0:"VERDADERO",
	op1:"FALSO",
	op2:"Falso, solo en consultorías",
	op3:"Ninguna de las anteriores",
	correcta:"1"
	},
	{
	id:17,
	pregunta:"Señalar la alternativa incorrecta, respecto a los elementos que determinan un procedimiento de selección:",
	op0:"Objeto de la contratación",
	op1:"Valor referencial",
	op2:"Incidencia porcentual",
	op3:"El tiempo de demora del proceso",
	correcta:"3"
	},
	{
	id:18,
	pregunta:"Señale el área que determina la viabilidad técnica, económica y/o administrativa para la contratación por ítems.",
	op0:"Órgano encargado de contrataciones",
	op1:"Comité especial",
	op2:"Titular de la Entidad",
	op3:"Ninguna de las anteriores",
	correcta:"0"
	},
	{
	id:19,
	pregunta:"En el acto de presentación de ofertas, de ser llamado un participante que no se encuentra presente, se tiene por desistido. Señale la alternativa correcta:  ",
	op0:"VERDADERO",
	op1:"FALSO",
	op2:"Falso, solo en bienes",
	op3:"Ninguna de las anteriores",
	correcta:"0"
	},
	{
	id:20,
	pregunta:"En caso de elevación del pliego de absolución de consultas y observaciones en Licitación y Concurso Público, la Entidad debe remitir el expediente completo al día hábil siguiente de recibida la solicitud de elevación. Señale la alternativa correcta.",
	op0:"FALSO",
	op1:"VERDADERO",
	op2:"Verdadero solo en obras",
	op3:"Ninguna de las anteriores",
	correcta:"1"
	},
	{
	id:21,
	pregunta:"La determinación del procedimiento de selección se realiza únicamente en atención:",
	op0:"Al objeto de la contratación, la cuantía del valor referencial, y las demás condiciones de empleo previstos en la Ley y el Reglamento.",
	op1:"Al objeto de la contratación y a la cuantía del valor referencial o del valor estimado.",
	op2:"Al objeto de la contratación, y a las demás condiciones para su empleo previstas en la Ley y el Reglamento.",
	op3:"Al sistema de la contratación, la cuantía del valor referencial o del valor estimado y al objeto de la contratación",
	correcta:"0"
	},
	{
	id:22,
	pregunta:"En una licitación pública para la ejecución de una obra, ¿La etapa de evaluación de la oferta es posterior a la calificación?",
	op0:"La afirmación es correcta toda vez que primero debe calificarse la oferta y después evaluarse.",
	op1:"No es correcto al desarrollarse ambas Etapas de manera conjunta.",
	op2:"La afirmación es correcta en tanto se trate de una obra de Saneamiento.",
	op3:"En una licitación pública para obras, la Etapa de Evaluación es anterior a la calificación de la Oferta.",
	correcta:"3"
	},
	{
	id:23,
	pregunta:"Son requisitos para convocar a un procedimiento de selección en el caso de obras.",
	op0:"No necesariamente la designación del Comité de Selección, ya que el procedimiento puede estar a cargo del OEC.",
	op1:"Expediente técnico, pero no necesariamente la disponibilidad física del terreno ya que puede establecerse en el contrato que la Entidad se compromete a entregarla en determinado plazo.",
	op2:"No es necesaria la inclusión en el Plan Anual si el proceso deriva de donaciones realizadas por un organismo internacional.",
	op3:"Expediente técnico y disponibilidad física del terreno.",
	correcta:"3"
	},
	{
	id:24,
	pregunta:"En una licitación pública convocada por una Municipalidad Provincial para la adquisición de armarios, se produce un empate en el puntaje total entre tres postores ¿Qué información debe registrar y publicar la municipalidad en el SEACE?",
	op0:"La municipalidad debe registrar y publicar el acta y el cuadro comparativo en el que conste la razón social de los postores que empataron",
	op1:"La municipalidad puede registrar y publicar el acta y el cuadro comparativo en el que conste la razón social de los postores que empataron",
	op2:"La Municipalidad debe registrar y publicar el acta en el que conste la razón social de los postores que empataron, pero no está obligada a registrar el cuadro comparativo.",
	op3:"La municipalidad debe registrar y publicar el cuadro comparativo, pero no está obligada a registrar el acta en el que conste la razón social de los postores que empataron.",
	correcta:"0"
	},
	{
	id:25,
	pregunta:"Para la adquisición de mamparas de vidrio por un monto de S/. 100,000,000.00, una Universidad Pública debe convocar………………………., y para la adquisición por un monto de S/ 150,000.00 debe convocar…………………Señale la alternativa correcta para completar los espacios en blanco:",
	op0:"Una adjudicación simplificada, una licitación publica",
	op1:"Una licitación pública, una licitación publica",
	op2:"Una licitación pública, una adjudicación simplificada",
	op3:"Una adjudicación simplificada, una adjudicación simplificada",
	correcta:"2"
	},
	{
	id:26,
	pregunta:"Para la contratación de servicio de limpieza y fumigación de S/.620,000,000.00, un Gobierno Regional debe convocar……………………..y para la ejecución de obras, por un monto de S/. 550,000.00 debe convocar…………………………..Señale la alternativa correcta para completar los espacios.",
	op0:"Un concurso público, una adjudicación simplificada",
	op1:"Una adjudicación simplificada, un concurso publico",
	op2:"Una adjudicación simplificada, una adjudicación simplificada",
	op3:"Un concurso público, un concurso público.",
	correcta:"0"
	},
	{
	id:27,
	pregunta:"Una Municipalidad Distrital quiere convocar…………………………………..para la adquisición de frazadas la secuencia correcta de dicho procedimiento de ser…………………………………………..y…………………………Señale la alternativa correcta para completar el espacio en blanco.",
	op0:"Una licitación pública presentación de ofertas, admisión, evaluación y calificación de ofertas.",
	op1:"Una licitación pública presentación de ofertas, admisión, calificación y evaluación de ofertas.",
	op2:"Una adjudicación simplificada, presentación de ofertas, admisión, calificación y evaluación de ofertas.",
	op3:"Una adjudicación simplificada, presentación de ofertas, evaluación, admisión y calificación de ofertas.",
	correcta:"0"
	},
	{
	id:28,
	pregunta:"El procedimiento de selección denominado comparación de precios se utiliza para:",
	op0:"La adquisición de módulos de atención al cliente según plano adjunto",
	op1:"La elaboración de un expediente técnico",
	op2:"La adquisición de tuberías de PVC de 1’ para agua fría",
	op3:"La compra de cereales que en conjunto contengan 450 calorías por ración",
	correcta:"2"
	},
	{
	id:29,
	pregunta:"Las bases de un Concurso Público para Elaboración de Expediente Técnico de Obra no han considerado el factor de evaluación denominado precio. Al respecto corresponde indicar:",
	op0:"Si nadie lo observó es válido.",
	op1:"No hay problema pues dicho factor es facultativo para el caso de servicios en general.",
	op2:"No hay problema pues dicho factor es facultativo para el caso de consultoría de servicios.",
	op3:"Debería declarase la nulidad.",
	correcta:"3"
	},
	{
	id:30,
	pregunta:"Respecto a los recursos de apelación, marque la alternativa correcta:",
	op0:"El Tribunal puede solicitar información adicional a la Entidad, al impugnante y a terceros a fin de recabar la documentación necesaria para mejor resolver.",
	op1:"El Tribunal es competente para resolver recursos de apelación interpuestos contra nulidades y cancelaciones, pero solo en procedimientos con valores estimados o referenciales superiores a 65 UIT.",
	op2:"Es posible interponer recursos de reconsideración y de revisión contra las decisiones emitidas por el Tribunal",
	op3:"La Entidad puede resolver el recurso de apelación sin correr traslado a los postores que tengan interés directo en la resolución del recurso.",
	correcta:"0"
	},
	{
	id:31,
	pregunta:"¿Cuál de las siguientes no es un factor de evaluación para la contratación de bienes?",
	op0:"Capacitación del Personal",
	op1:"Sostenibilidad Social",
	op2:"Experiencia del Postor",
	op3:"Precio",
	correcta:"2"
	},
	{
	id:32,
	pregunta:"El procedimiento de selección de subasta inversa electrónica, se realiza para la:",
	op0:"Contratación de bienes y servicios comunes, incluyendo consultorías, salvo consultorías de obras",
	op1:"Contratación de bienes y servicios comunes",
	op2:"Contratación de bienes, servicios y obras comunes",
	op3:"Contratación de servicios, incluyendo consultorías",
	correcta:"1"
	},
	{
	id:33,
	pregunta:"En las Contrataciones Directas cuál de los siguientes supuestos no es delegable:",
	op0:"Servicios especializados para la defensa de funcionarios.",
	op1:"Proveedor único.",
	op2:"Cuando se contrate con otra entidad.",
	op3:"Servicios educativos para capacitación.",
	correcta:"2"
	},
	{
	id:34,
	pregunta:"¿Cuáles son los factores de evaluación para licitaciones públicas de obras?",
	op0:"Precio, sostenibilidad ambiental y social, y en el caso de la modalidad de llave en mano, capacitación del personal.",
	op1:"Precio, sostenida ambiental y social, y en el caso de la modalidad de llave en mano, operación asistida.",
	op2:"Capacidad Legal, Capacidad Técnica y Profesional, y Experiencia del Postor",
	op3:"Capacitación, Infraestructura y Precio y experiencia del postor",
	correcta:"0"
	},
	{
	id:35,
	pregunta:"La elevación de las Bases para que la Dirección de Gestión de Riesgos del OSCE emita pronunciamiento, procede:",
	op0:"Cuando no fueron acogidas las observaciones presentadas en cualquier procedimiento.",
	op1:"Cuando la absolución resulta contraria a las buenas costumbres.",
	op2:"Con la nueva normativa no procede la elevación en ningún caso.",
	op3:"Cuando no fueron acogidas total o parcialmente las consultas u observaciones sólo en el caso de LP y CP.",
	correcta:"3"
	},
	{
	id:36,
	pregunta:"Respecto a las Licitaciones Públicas indique la respuesta correcta:",
	op0:"En una Licitación Pública el plazo entre la integración de bases y la presentación de ofertas no debe ser menor de cuatro (4) días hábiles",
	op1:"El plazo mínimo para la etapa de consultas y observaciones es de 05 días hábiles",
	op2:"En una LP, para contratación de bienes, la secuencia correcta de los actos a cargo del comité de selección es la siguiente: presentación de ofertas, verificación de contenido mínimo, admisión de la propuesta, aplicación de los factores de evaluación, verificación de los requisitos de calificación del postor que ocupo el primer lugar y otorgamiento de la buena pro.",
	op3:"El plazo para el consentimiento de la Licitación Publica es de 05 días hábiles de notificada la buena pro, si es que se presentan más de una oferta.",
	correcta:"2"
	},
	{
	id:37,
	pregunta:"En una licitación pública para la ejecución de una obra, ¿La etapa de evaluación de la oferta es posterior a la calificación?",
	op0:"La afirmación es correcta toda vez que primero debe Calificarse la oferta y después evaluarse",
	op1:"No es correcto al desarrollarse ambas Etapas de manera conjunta",
	op2:"La afirmación es correcta en tanto se trate de una obra de Saneamiento",
	op3:"En una Licitación Pública para obras, la Etapa de Evaluación es anterior a la Calificación de la Oferta",
	correcta:"3"
	},
	{
	id:38,
	pregunta:"De la revisión de las Bases se advierte que, el plazo de ejecución indicado en letras dice (ciento veinte) pero en números se ha indicado (180). ¿Qué principio se ha vulnerado?",
	op0:"Principio de Competencia",
	op1:"Principio de Libertad de Concurrencia",
	op2:"Principio de Transparencia",
	op3:"Principio de Equidad",
	correcta:"2"
	},
	{
	id:39,
	pregunta:"Si una subasta inversa electrónica es declarada desierta por segunda vez, la siguiente convocatoria se realiza bajo el procedimiento de:",
	op0:"Subasta Inversa Electrónica",
	op1:"Licitación Pública",
	op2:"Adjudicación Simplificada",
	op3:"Comparación de Precios",
	correcta:"2"
	},
	{
	id:40,
	pregunta:"Señale la respuesta correcta. Durante la adjudicación simplificada, cual es el primer criterio de desempate",
	op0:"Sorteo electrónico a través del SEACE.",
	op1:"Al postor que haya obtenido el mejor puntaje total.",
	op2:"A favor de las microempresas y pequeñas empresas integradas por personas con discapacidad",
	op3:"A favor de las microempresas y pequeñas empresas.",
	correcta:"2"
	},
	{
	id:41,
	pregunta:"¿En qué objeto de contratación se puede incluir el Factor de Evaluación calificaciones y/o experiencias del personal clave?",
	op0:"Únicamente en bienes",
	op1:"Consultorías",
	op2:"Únicamente en consultoría de obras",
	op3:"Servicios",
	correcta:"2"
	},
	{
	id:42,
	pregunta:"Los postores que deseen acreditar su experiencia como requisito de calificación en un procedimiento de selección convocado para la contratación de ejecución de obras pueden presentar:",
	op0:"Sólo contratos de obra ejecutados en el marco de la normativa de contrataciones",
	op1:"Sólo contratos de obra ejecutados en consorcio, siempre que se presente en consorcio",
	op2:"Sólo contratos de obra como persona natural, jurídica o en consorcio en el marco de la normativa de contrataciones del Estado.",
	op3:"Contratos de figuras asociativas distintos del consorcio.",
	correcta:"2"
	},
	{
	id:43,
	pregunta:"El OEC tiene a su cargo los procedimientos de:",
	op0:"Concurso Público",
	op1:"Licitación Pública",
	op2:"Concurso de Precios",
	op3:"Adjudicación Simplificada",
	correcta:"3"
	},
	{
	id:44,
	pregunta:"¿Es subsanable la legalización de las firmas de la promesa formal de consorcio?",
	op0:"No es subsanable",
	op1:"Solo es subsanable cuando la presentación de ofertas se realiza en acto público",
	op2:"Sí, es subsanable",
	op3:"Solo es subsanable las firmas no la legalización",
	correcta:"2"
	},
	{
	id:45,
	pregunta:"¿En qué supuesto corresponde aplicar el supuesto de contratación directa denominado: ‘Contrataciones derivadas de un contrato’",
	op0:"Cuando se resuelva un contrato y exista la necesidad urgente de culminar con la ejecución de las prestaciones derivadas de este, pese a que en el procedimiento solo hubo una propuesta válida.",
	op1:"Cuando se resuelva un contrato y exista la necesidad urgente de culminar con la ejecución de las prestaciones derivadas de este, pudiéndose contratar con proveedores distintos a los que fueron postores.",
	op2:"Cuando se resuelva un contrato y exista la necesidad urgente de culminar con la ejecución de las prestaciones derivadas de este, no debiendo encontrarse la resolución sometida a algún medio de solución de controversias.",
	op3:"Cuando se resuelva un contrato y exista la necesidad urgente de culminar con la ejecución de las prestaciones derivadas de este, pese a que la resolución se encuentra sometida a algún medio de solución de controversias",
	correcta:"3"
	},
	{
	id:46,
	pregunta:"Para convocar un procedimiento de selección, por regla general, se debe verificar previamente lo siguiente:",
	op0:"Que se publique las Bases Administrativas al momento de la convocatoria.",
	op1:"Que el procedimiento se encuentre incluido en el PAC.",
	op2:"Que se publique el Resumen Ejecutivo al momento de la convocatoria, excepto en el caso de obras.",
	op3:"Todas son correctas.",
	correcta:"1"
	},
	{
	id:47,
	pregunta:"¿Cuáles son los requisitos de calificaciones opcionales en los concursos públicos de consultoría de obras?",
	op0:"Infraestructura",
	op1:"Equipamiento",
	op2:"Equipamiento y Experiencia del personal clave",
	op3:"Equipamiento, Experiencia en la Actividad y Experiencia en la Especialidad",
	correcta:"1"
	},
	{
	id:48,
	pregunta:"No es un requisito de calificación de la oferta:",
	op0:"La Capacidad Legal",
	op1:"La Capacidad Técnica",
	op2:"La Capacidad del Profesional",
	op3:"El Plazo de entrega",
	correcta:"3"
	},
	{
	id:49,
	pregunta:"¿Cuáles son los factores de evaluación para concurso público de consultoría de obras?",
	op0:"Capacidad Legal, Capacidad Técnica y Profesional, y Experiencia del Postor",
	op1:"Precio, sostenibilidad ambiental y social, y capacitación del personal de la entidad",
	op2:"Metodología Propuesta, Calificación y Experiencia Personal Clave y Otros factores referidos al objeto de la convocatoria",
	op3:"Metodología Propuesta, Calificación y Experiencia Personal Clave y sostenibilidad social y ambiental",
	correcta:"2"
	},
	{
	id:50,
	pregunta:"¿En qué objeto de contratación se puede incluir el Factor de Evaluación calificaciones y/o experiencias del personal clave?",
	op0:"Únicamente en bienes",
	op1:"Consultoría",
	op2:"Únicamente en consultoría",
	op3:"Servicios",
	correcta:"2"
	},
	{
	id:51,
	pregunta:"El funcionario delegado por el Titular de la Entidad, aprueba el expediente de contratación mediante un proveído, sobre el particular corresponde firmar:",
	op0:"En todos los casos la aprobación debió realizarse necesariamente mediante resolución.",
	op1:"En todos los casos la aprobación no debió realizarse necesariamente mediante resolución.",
	op2:"La aprobación debió realizarse necesariamente mediante resolución del funcionario delegado.",
	op3:"La aprobación ha sido correcta",
	correcta:"3"
	},
	{
	id:52,
	pregunta:"Los procedimientos de selección que presentan las ofertas en un sobre son:",
	op0:"Adjudicación Simplificada para consultoría de obras",
	op1:"Adjudicación Simplificada para bienes y servicios",
	op2:"Comparación de precios",
	op3:"Concurso Público para consultoría de obras",
	correcta:"1"
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
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (52-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}