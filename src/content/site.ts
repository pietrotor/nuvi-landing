export const site = {
	name: 'Nuvi',
	url: import.meta.env.PUBLIC_SITE_URL ?? 'https://nuvi.bo',
	whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '59170000000',
	seo: {
		title: 'Nuvi | Tu WhatsApp contesta y agenda por vos',
		description:
			'Asistente por WhatsApp para consultorios, clínicas chicas y centros de estética: responde consultas, ofrece horarios libres y reserva en la agenda real.',
	},
	accessibility: {
		skipToContent: 'Saltar al contenido',
		homeLink: 'inicio',
		mainNav: 'Navegación principal',
		mobileNav: 'Navegación móvil',
		footerNav: 'Navegación del pie',
		openMenu: 'Abrir menú',
	},
	navigation: [
		{ label: 'Ver la demo', href: '#demo' },
		{ label: 'Cómo atiende', href: '#como-atiende' },
		{ label: 'Qué resuelve', href: '#que-resuelve' },
		{ label: 'Tu panel', href: 'https://app.nuvi.lat/' },
		{ label: 'Preguntas', href: '#preguntas' },
	],
	cta: {
		label: 'Pedir una demo',
		whatsappMessage: 'Hola, quiero pedir una demo de Nuvi para mi centro.',
	},
	hero: {
		eyebrow: 'Para centros de salud y estética',
		title: 'Tu WhatsApp agenda. Vos atendés.',
		description:
			'Nuvi responde a cualquier hora, ofrece solo horarios libres y deja cada cita en la agenda de tu equipo.',
		secondaryCta: 'Ver cómo agenda',
		facts: [
			{
				title: 'Tu mismo número',
				description: 'Conservás el WhatsApp y la app que las personas ya conocen.',
			},
			{
				title: 'Tu QR, tu plata',
				description: 'La seña entra a tu cuenta. Nosotros no tocamos el dinero.',
			},
			{
				title: 'Una sola agenda',
				description: 'WhatsApp, panel y página de reservas miran los mismos horarios.',
			},
			{
				title: 'Configuramos todo con vos',
				description:
					'Cargamos servicios, profesionales, horarios y políticas antes de empezar.',
			},
		],
	},
	industries: {
		title: 'Para negocios que viven de sus citas.',
		description:
			'Cada servicio tiene sus propios tiempos y reglas. Nuvi los aprende y cuida tu agenda.',
		markets: [
			{
				shortTitle: 'Estética',
				title: 'Centros de estética',
				description: 'Tratamientos, aparatología y paquetes de varias sesiones.',
				imageAlt: 'Profesional preparando una cabina en un centro de estética',
			},
			{
				shortTitle: 'Salones y spas',
				title: 'Salones y spas',
				description:
					'Cortes, color, uñas, masajes y servicios con duraciones diferentes.',
				imageAlt: 'Estilista preparando su espacio en un salón de belleza',
			},
			{
				shortTitle: 'Consultorios',
				title: 'Consultorios médicos',
				description: 'Consultas y controles organizados por profesional.',
				imageAlt: 'Doctora conversando con una paciente en su consultorio',
			},
			{
				shortTitle: 'Odontología',
				title: 'Odontología',
				description: 'Turnos para consultas, controles y procedimientos programados.',
				imageAlt: 'Dentista preparando un consultorio odontológico',
			},
			{
				shortTitle: 'Fisioterapia',
				title: 'Fisioterapia y kinesiología',
				description: 'Sesiones recurrentes y paquetes con el saldo siempre actualizado.',
				imageAlt: 'Fisioterapeuta guiando un ejercicio de movilidad',
			},
			{
				shortTitle: 'Clínicas',
				title: 'Clínicas y centros de salud',
				description: 'Varios servicios, profesionales y sucursales en una sola agenda.',
				imageAlt: 'Equipo coordinando citas en la recepción de una clínica',
			},
		],
		closing:
			'Si tu negocio atiende con cita previa, Nuvi puede encargarse del WhatsApp y mantener la agenda al día.',
	},
	heroChat: {
		label:
			'Conversación de WhatsApp atendida por el asistente virtual de un centro de estética',
		contact: 'Estética Camila',
		avatar: 'EC',
		statusBarTime: '10:11',
		onlineStatus: 'en línea',
		assistantIdentity: 'Vale, asistente virtual',
		todayLabel: 'Hoy',
		typingLabel: 'Vale está escribiendo',
		composerHint: 'Escribí un mensaje',
		messages: [
			{
				direction: 'outgoing',
				text: 'Hola, ¿tienen limpieza facial mañana por la tarde?',
				time: '10:11',
			},
			{
				direction: 'incoming',
				text: 'Hola, soy Vale, asistente virtual. Camila tiene libre a las 15:30 y 17:00. ¿Cuál te sirve?',
				time: '10:11',
			},
			{
				direction: 'outgoing',
				text: 'Soy Daniela. A las 17:00, por favor.',
				time: '10:12',
			},
			{
				direction: 'incoming',
				text: 'Limpieza facial, mañana a las 17:00, con Camila. ¿Confirmás?',
				time: '10:12',
			},
			{
				direction: 'outgoing',
				text: 'Sí, confirmo.',
				time: '10:13',
			},
			{
				direction: 'incoming',
				text: 'Listo, Daniela. Tu cita quedó reservada para mañana a las 17:00.',
				time: '10:13',
			},
		],
		resultLabel: 'Guardada en la agenda',
		resultTitle: 'Jueves 13, 17:00',
		resultDetail: 'Limpieza facial con Camila',
	},
	problem: {
		eyebrow: 'Cómo es hoy',
		title: 'El teléfono no debería manejar tu día.',
		description:
			'Cada cita empieza con un mensaje, y ese mensaje casi nunca llega en un buen momento.',
		items: [
			'Son las once de la noche y entran tres mensajes preguntando lo mismo.',
			'Tenés las manos con guantes y el teléfono no para de sonar.',
			'La seña quedó anotada en un chat y el saldo del paquete, en el cuaderno.',
			'Una persona mueve su horario y se te desordena el día entero.',
		],
		closing: 'Contestar tarde no es un mensaje perdido. Es una cita perdida.',
	},
	bookingStory: {
		label:
			'Demo interactivo: una conversación de WhatsApp que crea una cita en la agenda',
		previewLabel: 'Vista previa de una conversación atendida por Nuvi',
		contact: 'Estética Camila',
		avatar: 'EC',
		status: 'en línea',
		statusBarTime: '10:11',
		assistantIdentity: 'Vale · asistente virtual',
		todayLabel: 'Hoy',
		messageTimes: {
			client: '10:11',
			assistant: '10:12',
			selection: '10:13',
			confirmation: '10:13',
		},
		clientMessage: 'Hola, ¿tienen limpieza facial mañana por la tarde?',
		typingLabel: 'Vale está escribiendo',
		assistantMessage: 'Sí. Camila tiene libre a las 15:30 y 17:00.',
		slots: ['15:30', '17:00'],
		selection: '17:00, por favor',
		confirmation: 'Listo, te esperamos mañana a las 17:00.',
		selectionTemplate: '{time}, por favor',
		confirmationTemplate: 'Listo, te esperamos mañana a las {time}.',
		composerHint: 'Mensaje',
		transferLabel: 'Comprobando disponibilidad',
		availableLabel: 'Disponible',
		calendarLabel: 'Agenda de mañana',
		calendarDay: 'Jueves 13',
		professional: 'Camila',
		rows: [
			{ time: '14:30', service: 'Manicura semipermanente', client: 'Rocío Fernández' },
			{ time: '15:30', service: '', client: '' },
			{ time: '16:30', service: 'Diseño de cejas', client: 'Melisa Arce' },
			{ time: '17:00', service: '', client: '' },
			{ time: '18:00', service: 'Masaje relajante', client: 'Andrea Pardo' },
		],
		appointment: {
			time: '17:00',
			client: 'Daniela Ríos',
			service: 'Limpieza facial',
			status: 'Confirmada',
		},
		scenarios: [
			{
				id: 'beauty',
				label: 'Centro de estética',
				contact: 'Estética Camila',
				avatar: 'EC',
				status: 'en línea',
				clientMessage: 'Hola, ¿tienen limpieza facial mañana por la tarde?',
				assistantMessage: 'Sí. Camila tiene libre a las 15:30 y 17:00.',
				slots: ['15:30', '17:00'],
				preferredSlot: '17:00',
				selectionTemplate: '{time}, por favor',
				confirmationTemplate: 'Listo, te esperamos mañana a las {time}.',
				calendarLabel: 'Agenda de mañana',
				calendarDay: 'Jueves 13',
				professional: 'Camila',
				note: 'Nuvi consulta los horarios reales antes de responder.',
				rows: [
					{
						time: '14:30',
						service: 'Manicura semipermanente',
						client: 'Rocío Fernández',
					},
					{ time: '15:30', service: '', client: '' },
					{ time: '16:30', service: 'Diseño de cejas', client: 'Melisa Arce' },
					{ time: '17:00', service: '', client: '' },
					{ time: '18:00', service: 'Masaje relajante', client: 'Andrea Pardo' },
				],
				appointment: {
					client: 'Daniela Ríos',
					service: 'Limpieza facial',
					status: 'Confirmada',
				},
			},
			{
				id: 'medical',
				label: 'Consultorio médico',
				contact: 'Consultorio Mendoza',
				avatar: 'CM',
				status: 'en línea',
				clientMessage: 'Hola, necesito agendar un control con la Dra. Mendoza.',
				assistantMessage: 'Claro. Mañana tiene libre a las 10:30 y 12:00.',
				slots: ['10:30', '12:00'],
				preferredSlot: '10:30',
				selectionTemplate: '{time} me queda bien',
				confirmationTemplate: 'Listo, tu control quedó agendado mañana a las {time}.',
				calendarLabel: 'Agenda de mañana',
				calendarDay: 'Viernes 14',
				professional: 'Dra. Mendoza',
				note: 'Vale gestiona la cita. Las consultas médicas se derivan a la profesional.',
				rows: [
					{ time: '09:30', service: 'Consulta', client: 'María Salvatierra' },
					{ time: '10:30', service: '', client: '' },
					{ time: '11:30', service: 'Seguimiento', client: 'Jorge Rojas' },
					{ time: '12:00', service: '', client: '' },
					{ time: '13:00', service: 'Consulta', client: 'Lucía Vargas' },
				],
				appointment: {
					client: 'Daniela Ríos',
					service: 'Consulta de control',
					status: 'Confirmada',
				},
			},
		],
	},
	bookingDemo: {
		title: 'Mirá cómo una consulta termina en una cita confirmada',
		description:
			'La conversación avanza sola, como la vería una persona que escribe al WhatsApp de tu centro.',
		helper: 'Se reproduce sola',
		scenarioLabel: 'Ver demo para',
		clientStatus: 'Llegó una consulta por WhatsApp',
		typingStatus: 'Vale está respondiendo',
		readyStatus: 'Horarios disponibles',
		bookingStatus: 'Revisando la agenda',
		confirmedStatus: 'Cita guardada en la agenda',
		resetLabel: 'Reproducir de nuevo',
		illustrativeLabel: 'Ejemplo de una reserva con seña',
		previewReceiptLabel: 'Cita confirmada',
		previewReceiptDetail: 'Jueves 13 · 17:00',
	},
	whatsappDemo: {
		label:
			'Conversación de ejemplo en WhatsApp que consulta disponibilidad, reserva una cita, envía el QR y confirma la seña',
		contact: 'Estética Camila',
		avatar: 'EC',
		assistantIdentity: 'Vale, asistente virtual',
		statusBarTime: '10:11',
		onlineStatus: 'en línea',
		todayLabel: 'Hoy',
		typingLabel: 'Vale está escribiendo',
		composerHint: 'Mensaje',
		automaticLabel: 'En vivo',
		depositAmount: 'Seña: Bs 50',
		qrCaption: 'QR de Estética Camila',
		qrImageAlt:
			'QR bancario de demostración de Estética Camila, sin datos de pago reales',
		receiptName: 'comprobante-demo.jpg',
		receiptCaption: 'Comprobante de demostración',
		receiptImageAlt:
			'Comprobante bancario de demostración por Bs 50, sin datos personales reales',
		progressLabel: 'Qué hace Nuvi durante la conversación',
		progressCase: 'Ejemplo de reserva · Daniela',
		progressTitle: 'Cinco minutos entre la consulta y la cita confirmada',
		progressDescription:
			'Nuvi resolvió la conversación y actualizó la agenda. Camila solo tuvo que verificar la seña.',
		mobileStatusLabel: 'Nuvi está trabajando',
		humanAction: {
			label: 'Única intervención del centro',
			title: 'Camila verificó la seña',
			description: 'El dinero llegó directamente a la cuenta del negocio.',
		},
		bookingSummary: [
			{ label: 'A nombre de', value: 'Daniela Ríos' },
			{ label: 'Servicio', value: 'Limpieza facial' },
			{ label: 'Cuándo', value: 'Jueves 13, 17:00' },
			{ label: 'Profesional', value: 'Camila' },
		],
		steps: [
			{
				time: '10:11',
				title: 'Encontró dos horarios',
				description: '15:30 y 17:00 estaban libres con Camila.',
			},
			{
				time: '10:12',
				title: 'Daniela eligió las 17:00',
				description: 'Nuvi volvió a revisar y reservó el horario.',
			},
			{
				time: '10:15',
				title: 'Llegó el comprobante',
				description: 'Seña de Bs 50 pendiente de revisión.',
			},
			{
				time: '10:16',
				title: 'Cita confirmada',
				description: 'Jueves 13 a las 17:00 · Limpieza facial.',
			},
		],
		messages: [
			{
				direction: 'outgoing',
				kind: 'text',
				text: 'Hola, ¿tienen limpieza facial mañana por la tarde?',
				time: '10:11',
			},
			{
				direction: 'incoming',
				kind: 'text',
				text: 'Hola, soy Vale, asistente virtual de Estética Camila. Encontré dos horarios libres con Camila: 15:30 y 17:00. Para reservar, decime tu nombre y cuál preferís.',
				time: '10:11',
			},
			{
				direction: 'outgoing',
				kind: 'text',
				text: 'Soy Daniela. A las 17:00, por favor.',
				time: '10:12',
			},
			{
				direction: 'incoming',
				kind: 'summary',
				text: 'Perfecto. Revisá los datos antes de confirmar:',
				time: '10:12',
			},
			{
				direction: 'outgoing',
				kind: 'text',
				text: 'Sí, confirmo.',
				time: '10:12',
			},
			{
				direction: 'incoming',
				kind: 'qr',
				text: 'Listo, reservé el horario mientras enviás la seña de Bs 50. Pagá con el QR del centro y mandame el comprobante por acá.',
				time: '10:13',
			},
			{
				direction: 'outgoing',
				kind: 'receipt',
				text: 'Ya pagué. Te envío el comprobante.',
				time: '10:15',
			},
			{
				direction: 'incoming',
				kind: 'text',
				text: 'Recibí el comprobante. Tu cita sigue pendiente hasta que el centro verifique la seña.',
				time: '10:15',
			},
			{
				direction: 'incoming',
				kind: 'text',
				text: 'El centro verificó tu seña. Tu cita está confirmada para mañana a las 17:00 con Camila. Te enviaré un recordatorio.',
				time: '10:16',
			},
		],
		resultLabel: 'Cita confirmada',
		resultTitle: 'Jueves 13 a las 17:00',
		resultDetail: 'Limpieza facial con Camila. Seña verificada manualmente.',
	},
	journeyDemo: {
		label:
			'Demo interactiva del recorrido de una cita por WhatsApp: agendamiento, seña, recordatorio y reagendamiento',
		verticalLabel: 'Ver caso para',
		stageLabel: 'Elegí un momento',
		replayLabel: 'Reproducir recorrido',
		automaticLabel: 'Recorrido automático',
		manualLabel: 'Vos tomaste el control',
		assistantIdentity: 'Vale · asistente virtual',
		statusBarTime: '10:11',
		onlineStatus: 'en línea',
		todayLabel: 'Hoy',
		messageTimes: {
			client: '10:11',
			assistant: '10:12',
			response: '10:13',
			final: '10:13',
		},
		composerHint: 'Mensaje',
		typingLabel: 'Vale está escribiendo',
		stages: [
			{
				id: 'booking',
				label: 'Agendar',
				description: 'Consulta la agenda y guarda el horario.',
			},
			{
				id: 'deposit',
				label: 'Seña por QR',
				description: 'Envía el QR y espera tu verificación.',
			},
			{
				id: 'reminder',
				label: 'Recordatorio',
				description: 'Pregunta si la persona podrá asistir.',
			},
			{
				id: 'reschedule',
				label: 'Reagendar',
				description: 'Mueve la cita y regenera los avisos.',
			},
		],
		sidePanel: {
			agendaTitle: 'Agenda del centro',
			available: 'Disponible',
			checking: 'Comprobando disponibilidad',
			saved: 'Cita guardada',
			depositTitle: 'Seña de la cita',
			depositPending: 'Esperando comprobante',
			receiptReceived: 'Comprobante recibido',
			verifyAction: 'Marcar como recibido',
			depositVerified: 'Seña verificada manualmente',
			moneyNote: 'El QR y el dinero pertenecen al centro.',
			reminderTitle: 'Recordatorios de la cita',
			reminderSent: 'Recordatorio enviado',
			reminderScheduled: 'Próximo aviso programado',
			reminderTiming: '2 horas antes de la cita',
			rescheduleTitle: 'Cambio en la agenda',
			previousTime: 'Horario anterior',
			newTime: 'Nuevo horario',
			released: 'Horario liberado',
			updated: 'Cita actualizada',
			newSlot: 'Nuevo horario',
			sampleBusyService: 'Masaje relajante',
			sampleBusyPerson: 'Andrea Pardo',
			sampleBusyTime: '18:30',
		},
		scenarios: [
			{
				id: 'beauty',
				label: 'Centro de estética',
				contact: 'Estética Camila',
				avatar: 'EC',
				personTerm: 'Clienta',
				person: 'Daniela Ríos',
				service: 'Limpieza facial',
				professional: 'Camila',
				date: 'Jueves 13',
				oldTime: '17:00',
				bookingSlots: ['15:30', '17:00'],
				newDate: 'Viernes 14',
				newSlots: ['15:30', '17:30'],
				preferredNewSlot: '17:30',
				deposit: 'Bs 50',
				booking: {
					client: 'Hola, ¿tienen limpieza facial mañana por la tarde?',
					assistant: 'Sí. Camila tiene libre a las 15:30 y 17:00.',
					choiceTemplate: '{time}, por favor',
					finalTemplate: 'Listo. Reservé mañana a las {time}.',
				},
				depositFlow: {
					assistant:
						'Para confirmar la cita necesitás una seña de Bs 50. Te envío el QR del centro.',
					action: 'Enviar comprobante',
					client: 'Listo, te envío mi comprobante.',
					final:
						'Comprobante recibido. La cita se confirma cuando el centro verifique la seña.',
				},
				reminder: {
					assistant:
						'Te recordamos tu limpieza facial mañana a las 17:00 con Camila. ¿Podrás asistir?',
					confirmAction: 'Sí, confirmo',
					rescheduleAction: 'Necesito reagendar',
					client: 'Sí, confirmo.',
					final: 'Perfecto. Te esperamos mañana a las 17:00.',
				},
				reschedule: {
					client: 'No podré asistir. ¿Podemos cambiar la cita?',
					assistant: 'Claro. El viernes Camila tiene libre a las 15:30 y 17:30.',
					choiceTemplate: 'El {time} me queda bien',
					finalTemplate: 'Listo. Moví tu cita al viernes a las {time}.',
				},
			},
			{
				id: 'medical',
				label: 'Consultorio médico',
				contact: 'Consultorio Mendoza',
				avatar: 'CM',
				personTerm: 'Paciente',
				person: 'Daniela Ríos',
				service: 'Consulta de control',
				professional: 'Dra. Mendoza',
				date: 'Viernes 14',
				oldTime: '10:30',
				bookingSlots: ['10:30', '12:00'],
				newDate: 'Lunes 17',
				newSlots: ['09:30', '11:00'],
				preferredNewSlot: '11:00',
				deposit: 'Bs 50',
				booking: {
					client: 'Hola, necesito agendar un control con la Dra. Mendoza.',
					assistant: 'Claro. Mañana tiene libre a las 10:30 y 12:00.',
					choiceTemplate: '{time} me queda bien',
					finalTemplate: 'Listo. Tu control quedó reservado a las {time}.',
				},
				depositFlow: {
					assistant:
						'Para confirmar la consulta necesitás una seña de Bs 50. Te envío el QR del consultorio.',
					action: 'Enviar comprobante',
					client: 'Listo, te envío mi comprobante.',
					final:
						'Comprobante recibido. El consultorio verificará la seña antes de confirmar.',
				},
				reminder: {
					assistant:
						'Te recordamos tu consulta mañana a las 10:30 con la Dra. Mendoza. ¿Podrás asistir?',
					confirmAction: 'Sí, confirmo',
					rescheduleAction: 'Necesito reagendar',
					client: 'Sí, confirmo.',
					final: 'Perfecto. Te esperamos mañana a las 10:30.',
				},
				reschedule: {
					client: 'No podré asistir. ¿Podemos cambiar la consulta?',
					assistant: 'Claro. El lunes la doctora tiene libre a las 09:30 y 11:00.',
					choiceTemplate: 'A las {time}, por favor',
					finalTemplate: 'Listo. Moví tu consulta al lunes a las {time}.',
				},
			},
		],
	},
	midCta: {
		title: 'Con tus servicios y tus horarios se ve mejor.',
		description:
			'En la demo cargamos tu centro y probamos la conversación real que van a tener quienes te escriben.',
	},
	flow: {
		title: 'Así pasa de mensaje a cita confirmada.',
		description:
			'Nuvi lleva la conversación y actualiza la agenda. Tu equipo interviene solo para verificar la seña.',
		automatedLabel: 'Nuvi se ocupa de',
		automatedTitle: 'Responder, buscar y reservar',
		ownerLabel: 'Vos intervenís acá',
		steps: [
			{
				label: 'WhatsApp',
				title: 'Responde con tus datos',
				description:
					'Contesta precios, duración y qué incluye cada servicio, tal como lo configuraste.',
			},
			{
				label: 'Agenda',
				title: 'Encuentra un horario libre',
				description:
					'Propone solo horas disponibles y comprueba otra vez antes de reservar.',
			},
			{
				label: 'Seña',
				title: 'Envía tu QR',
				description:
					'Recibe el comprobante y mantiene la cita pendiente hasta que lo revises.',
			},
		],
		ownerAction: {
			title: 'Verificás el comprobante',
			description:
				'Revisás que la seña de Bs 50 haya llegado a tu cuenta y la aprobás desde el panel.',
		},
		resultLabel: 'Después de verificar',
		resultTitle: 'Cita confirmada',
		resultDetail: 'Jueves 13 a las 17:00',
	},
	features: {
		title: 'Lo repetitivo queda resuelto. Vos seguís al mando.',
		description:
			'Nuvi atiende, agenda y recuerda. Vos entrás cuando querés revisar, corregir o responder en persona.',
		groupTitles: {
			attention: 'Nuvi atiende en WhatsApp',
			control: 'Tu centro conserva el control',
		},
		items: [
			{
				title: 'Responde las consultas de todos los días',
				description:
					'Servicios, precios, horarios, ubicación y políticas, usando solo la información de tu centro.',
			},
			{
				title: 'Agenda y mueve turnos',
				description:
					'Ofrece horas libres, vuelve a comprobarlas y actualiza la agenda cuando algo cambia.',
			},
			{
				title: 'Ordena las señas',
				description:
					'Envía el QR, recibe el comprobante y mantiene la cita pendiente hasta que lo verificás.',
			},
			{
				title: 'Actualiza paquetes y sesiones',
				description:
					'Descuenta una sesión únicamente cuando marcás la cita como atendida.',
			},
			{
				title: 'Envía los recordatorios',
				description:
					'Avisa antes del turno y acompaña el cambio de horario cuando alguien no puede asistir.',
			},
			{
				title: 'Te entrega la conversación',
				description:
					'Ante un reclamo, una pregunta clínica o un pedido de hablar con alguien, se detiene y te avisa.',
			},
		],
	},
	owner: {
		title: 'La agenda se ordena sin esconderte lo importante.',
		description:
			'Nuvi trabaja adelante y vos ves todo lo que hizo. Podés entrar a cualquier conversación, crear una cita a mano o corregir lo que haga falta.',
		imageAlt: 'Equipo pequeño trabajando mientras revisa la agenda del centro',
		overlay: {
			title: 'Cita confirmada',
			detail: '17:00 · Limpieza facial',
		},
		points: [
			'Vista del día y de la semana, por profesional',
			'Comprobantes de seña esperando tu verificación',
			'Conversaciones en curso, con el chat que ya te pasó',
			'Página de reservas lista para tu bio de Instagram',
		],
	},
	steps: {
		title: 'No empezás desde cero.',
		description:
			'Nadie te deja frente a un panel vacío: configuramos tu centro con vos antes de que Nuvi conteste el primer mensaje.',
		items: [
			{
				title: 'Configuramos tu centro',
				description:
					'Cargamos servicios, profesionales, sucursales, horarios, políticas y las preguntas que más te hacen.',
			},
			{
				title: 'Vinculamos tu WhatsApp',
				description:
					'Conectás tu número escaneando un código QR y elegís el nombre y el tono de tu asistente.',
			},
			{
				title: 'Probamos los flujos',
				description:
					'Revisamos con vos una consulta, una reserva, una seña, un recordatorio y el momento de pasarte el chat.',
			},
			{
				title: 'Empezás a atender',
				description:
					'Tu equipo mira la agenda y las conversaciones desde el panel, y pausa el asistente cuando quiere.',
			},
		],
	},
	safety: {
		title: 'Hay tres cosas que no hace nunca.',
		description:
			'No son ajustes que se puedan apagar sin querer. Están así por diseño, porque el nombre que está en juego es el de tu centro.',
		items: [
			{
				title: 'No finge ser una persona',
				description:
					'Se presenta como asistente virtual desde el primer mensaje, incluso si le preguntan.',
			},
			{
				title: 'No da consejo clínico',
				description:
					'Síntomas, diagnósticos, contraindicaciones y reacciones pasan a un profesional de tu equipo.',
			},
			{
				title: 'No ocupa un horario tomado',
				description:
					'Consulta la agenda real y la verifica otra vez en el momento de confirmar la cita.',
			},
		],
	},
	faq: {
		title: 'Lo que suelen preguntar antes de empezar.',
		items: [
			{
				question: '¿Sirve para un consultorio o una clínica?',
				answer:
					'Sí, siempre que trabaje principalmente con citas. Nuvi organiza consultas, horarios, señas y recordatorios, pero no reemplaza un sistema de historia clínica.',
			},
			{
				question: '¿Tengo que cambiar mi número de WhatsApp?',
				answer:
					'No. Nuvi se vincula al número que ya usa tu negocio y vos conservás el acceso a la aplicación.',
			},
			{
				question: '¿Nuvi recibe los pagos?',
				answer:
					'No. El QR y el dinero son de tu negocio. Nuvi manda el QR, recibe el comprobante y registra la verificación que hace tu equipo, pero la plata nunca pasa por nosotros.',
			},
			{
				question: '¿Y si el asistente se equivoca?',
				answer:
					'Solo trabaja con lo que está cargado: si no tiene un dato, lo dice en vez de inventarlo, y los horarios los vuelve a verificar antes de guardar. Igual podés entrar a cualquier conversación desde el panel, pausarlo y responder vos.',
			},
			{
				question: '¿Qué pasa si alguien quiere hablar con una persona?',
				answer:
					'El asistente avisa que alguien del equipo va a responder, se detiene y deja la conversación marcada en el panel para que la tomes.',
			},
			{
				question: '¿Puede responder preguntas médicas?',
				answer:
					'No da diagnósticos, interpreta síntomas ni recomienda tratamientos. Puede compartir información operativa que cargaste, como precios, duración o preparación previa, y deriva cualquier pregunta clínica a tu equipo.',
			},
			{
				question: '¿Puedo elegir cómo habla el asistente?',
				answer:
					'Sí. Durante la configuración elegís su nombre y si responde de manera cercana o formal, para que suene a tu centro.',
			},
			{
				question: '¿Funciona si tengo más de una sucursal?',
				answer:
					'Sí. Podés configurar varias sucursales, cada una con sus horarios, servicios, precios y profesionales.',
			},
			{
				question: '¿Cuánto cuesta?',
				answer:
					'Depende del tamaño de tu centro y de lo que necesites. Te lo explicamos en la demo, con todo lo que incluye y sin compromiso.',
			},
			{
				question: '¿Incluye Google Calendar o campañas masivas?',
				answer:
					'Todavía no. Esta primera versión se concentra en atender, agendar, cobrar señas, llevar paquetes y recordar citas, que es donde se te va el día.',
			},
		],
	},
	finalCta: {
		title: 'Veamos cuánto de tu día puede devolverte.',
		description:
			'Contanos cómo trabaja tu centro y te mostramos una demo armada con tus servicios, tus horarios y tu equipo.',
		reassurance: 'Sin instalar nada. La demo la vemos por WhatsApp.',
		imageAlt: 'Responsable de un centro revisando su teléfono en la recepción',
	},
	form: {
		kicker: 'Demo personalizada',
		title: 'Contanos sobre tu centro',
		description:
			'Usamos estos datos solo para armar el mensaje que vas a abrir en WhatsApp. No se guardan en esta página.',
		fields: {
			name: 'Tu nombre',
			business: 'Nombre del centro',
			city: 'Ciudad',
			teamSize: 'Personas que atienden',
		},
		teamOptions: ['Solo yo', '2 a 3', '4 a 6'],
		cancel: 'Ahora no',
		submit: 'Continuar en WhatsApp',
		whatsappIntro: 'Hola, quiero pedir una demo de Nuvi para mi centro.',
		whatsappLabels: {
			name: 'Mi nombre',
			business: 'Centro',
			city: 'Ciudad',
			teamSize: 'Personas que atienden',
		},
	},
	footer: {
		description:
			'Atención, agenda y control para consultorios, clínicas chicas y centros de estética que trabajan por WhatsApp.',
		copyright: `© ${new Date().getFullYear()} Nuvi. Todos los derechos reservados.`,
	},
} as const;

export type ExperimentVariant = 'direct' | 'form';
