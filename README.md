# Gestor de carreras de bicicleta.

## DESCRIPCIÓN DEL PROYECTO.

El Sistema de Gestión de Eventos y Carreras de bicicletas es una aplicación web diseñada para facilitar la organización y administración de eventos de carreras. El proyecto tiene como objetivo principal ofrecer una plataforma centralizada donde los organizadores puedan gestionar todos los aspectos relacionados con la planificación, coordinación y seguimiento de las carreras y eventos. 

### Características Principales:

1. **Registro, Gestión de Eventos y Carreras:**
   Los organizadores pueden registrar información detallada sobre cada evento que se realizará, así como información de cada carrera asociada. Esta funcionalidad proporciona una base de datos centralizada de todos los eventos y carreras planificadas.

2. **Visualización y Edición de Carreras y Eventos:**
   Se proporciona una interfaz intuitiva para ver y editar la información de los eventos y carreras registradas.

3. **Eliminación de Carreras y Eventos:**
   Los organizadores tienen la capacidad de eliminar eventos y carreras que ya no sean relevantes o que hayan sido canceladas.

4. **Interfaz de Usuario Intuitiva:**
   La aplicación cuenta con una interfaz de usuario intuitiva y fácil de usar que permite a los organizadores navegar sin problemas y realizar acciones de gestión de carreras de manera eficiente.

## DESARROLLO DEL PROYECTO.

### 1. Definición de requisitos:

El proyecto requiere de un sistema de login que funcione con generación de token con 3 días de duración en variable de sesión o cookie. Se debe permitir crear, editar, eliminar y ver los eventos y carreras. Además, se debe implementar una vista de participantes para ver la lista de participantes.

### 2. Análisis y diseño:

Se realizó un análisis del proyecto y se diseñó la base de datos, así como la estructura de carpetas del proyecto.

#### Diagrama de base de Datos:

#### Relaciones:

1. Bicicleta – Participante
   - Una bicicleta es usada por un participante.
   - Un participante usa una bicicleta.

2. Bicicleta – Categoría_Bicicleta
   - Una bicicleta tiene una categoría de bicicleta.
   - Una categoría de bicicleta tiene una o varias bicicletas.

3. Participante – Carrera
   - Un participante participa en una o varias carreras.
   - En una carrera participan uno o varios participantes.

4. Carrera – Evento
   - Una carrera es realizada por un evento.
   - Un evento realiza una o varias carreras.

5. Carrera – Categoria_Carrera
   - Una carrera es de una o varias categorías de carrera.
   - Una categoría de carrera es de una carrera.

6. Usuario – Token
   - Un usuario usa uno o varios token.
   - Un token es usado por un usuario.

## Diagrama UML

### Bicicleta y Participante:

En estas dos clases la de bicicletas no es utilizada de momento en el proyecto y la clase de participante sí, pero solo para obtener los participantes que hay en la base de datos.

### Carrera y Evento:

Estas dos clases son las que tienen el CRUD completo además de otras funcionalidades. En carreras se obtienen todas las carreras por evento para dar un mensaje de aviso cuando se intenta borrar un evento que tenga carreras asociadas.

### Categoría de carrera, categoría de bicicleta y tabla intermedia de participación:

La clase de categoría de carrera se utiliza para crear la carrera adecuadamente.

### Usuario y Token:

Estas clases se utilizan para la gestión de usuarios y tokens. El usuario se utiliza para comprobar el usuario y generar el token. Token se utiliza para generar tokens y comprobar su validez.

### Estructura de carpetas del proyecto:

En la raíz del proyecto se encuentran las carpetas de HTML, JS, PHP y ScriptBD. Cada una contiene los archivos relacionados con las vistas, controladores, modelos y la base de datos respectivamente.

#### HTML:

- **Bootstrap y CSS:** Contiene los estilos de la página.
- **Formularios:** Formularios de eventos y carreras.
- **Vistas:** Vistas de cada CRUD y un archivo navbar.html.

#### JS:

- **Conexión:** Contiene el objeto XMLHttpRequest.
- **Controlador:** Archivos de las clases utilizadas en el proyecto.
- **Tablas:** Tablas de las vistas de eventos, carreras y participantes.

#### PHP:

- **ApiRest:** Archivos de la API de las tablas utilizadas.
- **ConnectionDB:** Archivo de conexión a la base de datos.
- **Modelo:** Modelos que recogen los datos de la base de datos.

#### ScriptBD:

- Archivo de la base de datos.

### Implementación:

#### Creación de base de datos:

Se crea la base de datos si no existe.

#### Creación de tablas:

##### Usuario y Token:

## Despliegue

El despliegue de nuestro Sistema de Gestión de Eventos y Carreras de bicicletas se ha llevado a cabo utilizando la plataforma XAMPP. XAMPP es un entorno de desarrollo web de código abierto que proporciona todos los componentes necesarios para ejecutar una aplicación web localmente, incluyendo Apache, MySQL, PHP y Perl.

### Tecnologías Empleadas

#### Frontend:

- **HTML, CSS y JavaScript (Frontend):**
  - **HTML:** Es el lenguaje de marcado utilizado para definir la estructura de las páginas web.
  - **CSS:** Se encarga de estilizar y dar formato a las páginas web.
  - **JavaScript:** Aporta interactividad y funcionalidad dinámica a las páginas web.

#### Backend y Base de Datos:

- **PHP (Backend):**
  - Lenguaje de programación del lado del servidor utilizado para desarrollar la lógica del negocio.
- **MySQL (Base de Datos):**
  - Sistema de gestión de bases de datos relacional utilizado para almacenar y gestionar los datos del sistema.

#### Framework CSS:

- **Bootstrap:**
  - Framework CSS de código abierto que proporciona estilos predefinidos y componentes para facilitar el desarrollo de interfaces de usuario modernas y receptivas.

### Integración y Coste Empresarial

#### 1. Identificación de Necesidades del Sector Productivo y Proyectos Relacionados

- **Investigación de mercado:**

 El mercado objetivo al queremos llegar sería al de entusiastas o aficionados del ciclismo de cualquier edad y nivel de experiencia que tengan, en el cual estos aficionados encuentren eventos en los cuales socializar y competir.

- **Análisis de la demanda:**

  Hay una demanda que está creciendo sobre eventos de carreras de bicicletas, tanto en zonas urbanas como en zonas rurales, los aficionados buscan experiencias únicas o experiencias competitivas en las cuales mejorar sus habilidades o desafiar sus habilidades.

- **Investigación de competidores:**

  Ahora mismo, hay varias aplicaciones de eventos de carreras de bicicletas ofreciendo varios tipos de carreras, por ejemplo,de montaña, de carretera , urbanas, etc..

- **Análisis de tendencias:**

  Las tendencias actuales en el mundo del ciclismo incluyen un mayor interés en eventos de aventura y carreras de larga distancia.

#### 2. Aportación y Beneficios a la Empresa

- **Diversificación de ingresos**

  Organizar eventos de carreras de bicicletas puede ser una forma secundaria de generar ingresos extras para la empresa, más allá de tus actividades comerciales principales.

- **Fortalecimiento de la marca**

  Organizar eventos de carreras de bicicletas puede mejorar la visibilidad y el reconocimiento de la empresa, sobre todo entre los entusiastas del ciclismo y la gente local.

- **Desarrollo de relaciones comunitarias**

  Organizar eventos de carreras de bicicletas puede hacer que tu marca sea más visible y reconocida, especialmente entre los apasionados del ciclismo y la comunidad local.

- **Oportunidades de marketing y promoción**

  Los eventos ofrecen oportunidades para promocionar los productos o servicios de la empresa a través de patrocinios, presencia en el lugar del evento, material promocional y marketing en línea y offline.

- **Clientes potenciales**

  Los eventos de carreras de bicicletas atraen a participantes y espectadores interesados en el ciclismo, lo que puede generar clientes potenciales para la empresa, especialmente si ofrece productos o servicios relacionados con el ciclismo.

- **Impacto positivo en el equipo**

  Involucrar al equipo de la empresa en la organización de eventos de carreras de bicicletas puede mejorar la moral, el trabajo en equipo y la satisfacción laboral, al tiempo que brinda oportunidades para el desarrollo profesional y personal.

- **Generación de ingresos indirectos**

  Además de los ingresos directos generados por la organización de eventos, la empresa puede beneficiarse de ingresos indirectos a través de ventas adicionales en el lugar del evento, como alimentos y bebidas, productos promocionales y servicios relacionados.

#### 3. Costes Hardware y Software

- **Ordenadores para el desarrollo**

Requisitos del portátil:

Para la CPU cogeremos un i7, para la RAM elegiremos con 16 de Ram, Para el almacenamiento con un ssd de 512GB, con un controlador gráfico de Intel Iris Xe Graphics y usaremos windows 11 como sistema operativo
El portátil será el Lenovo IdeaPad 3 con precio de 530,50 €.

- **Servidor**

Requisitos del servidor: 

Procesador: Intel Xeon X5650 2.67 GHz (12 cores, 24 threads)
Memoria RAM: 32 GB DDR3 1333 MHz (4 x 8 GB)
Almacenamiento: 2 x 300 GB SAS 15K RPM HDD
Placa base: Lenovo System Planar x3650M4 HD
Tarjeta gráfica: Intel 3400MHD
Tarjeta de red: 2 x Gigabit Ethernet
Slot de expansión: 4 x PCIe x16, 2 x PCIe x8, 1 x PCIe x4

El servidor que cogeremos es el LENOVO 00AL055 con un precio de 273,00 €.

- **Licencias**

En este caso no usaremos ninguna licencia sin contar la del windows 11 del portátil y la de windows server del servidor.
  
- **Hostings**

  El hosting de la aplicación dependerá de cual son las preferencias que queramos de él, en este caso hay tres opciones buenas que son BlueHost, HostGator y SiteGround los tres son muy parecidos, todos oscilan por los mismos precios en las opciones más básicas e    intermedias pero hostGator es más barato en sus tres planes.

#### 4. Comparativa y Elección de Precios

- **Hostings:**
  
  - BlueHost

Bluehost es un proveedor de hosting web ampliamente reconocido por su fiabilidad y facilidad de uso. Ofrece una amplia gama de servicios de hosting, incluyendo hosting compartido, VPS y hosting dedicado, así como herramientas optimizadas para WordPress.
 
  - HostGator

    HostGator es otro proveedor de hosting web líder, conocido por su fiabilidad y variedad de servicios de hosting. Ofrece una amplia gama de opciones de hosting, desde hosting compartido hasta servidores dedicados, con un enfoque en la facilidad de uso y la          escalabilidad

  - SiteGround (Elegido)

    SiteGround destaca por su rendimiento excepcional y su enfoque en la seguridad y el soporte técnico de alta calidad. Ofrece una variedad de servicios de hosting, incluyendo hosting compartido, VPS y hosting dedicado, con un énfasis especial en la                   optimización para WordPress.

- **Licencias**
  
  Licencias de software no usa ya que es todo en php y js puro. Pero si se usara se podrían usar react para el javascript y laravel para el php debido a sus grandes comunidades, que te ayudarán si hay algún problema.

- **Copias de seguridad**

Para las copias de seguridad usaremos la funcionalidad de github para clonar el repositorio del proyecto y poderlo guardar en un disco externo o en algún ordenador principal.
  
- **Dominios**

  El dominio dependería de como se llamara la aplicacion en este caso la llame CABICI. Asique el dominio seria algo como CABICI.com
   El dominio en ionos el primer año está a 1 € al año y en el segundo año cuesta 14,95 €.

### Bibliografía

- JavaScript. Recuperado de [enlace](https://developer.mozilla.org/es/docs/Web/JavaScript)
- PHP. Recuperado de [enlace](https://www.php.net/manual/es/intro-whatis.php)
- Bootstrap. Recuperado de [enlace](https://getbootstrap.com/)
- Github. Recuperado de [enlace](https://github.com/)
- BlueHost. Recuperado de [enlace](Bluehost.com)
- HostGator. Recuperado de [enlace](HostGator.com)
- SiteGround. Recuperado de [enlace](SiteGround.com)
- Lenovo IdeaPad 3. Recuperado de [enlace](https://www.pccomponentes.com/lenovo-ideapad-3-15itl6-intel-core-i7-1165g7-16-gb-512gb-ssd-156?offer=306b2727-e6eb-402a-896d-c7b35006e068)
- LENOVO 00AL055 - System Planar - x3650M4 HD. Recuperado de [enlace](https://www.renewtech.es/lenovo-00al055.html?gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBlevep52XpEikKroX23i6x8j-LBvfcxCz7aECcUMwAbzB7ft-6QhhzJoaAttqEALw_wcB)
- Github del proyecto: [ProyectoFinal2DAW](https://github.com/rubensosa1608/ProyectoFinal2DAW)

### Anexos

- Guía de Usuario (PDF)
- Guía del Desarrollador Clase Evento (PDF)
- DTS Evento (PDF)
- Guía de Estilo HTML-CSS (PDF)
- Guía de Estilo JS (PDF)
- Guía de Estilo PHP (PDF)
