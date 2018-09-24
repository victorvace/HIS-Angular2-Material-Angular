# HISFrontendAngular

Actividad didáctica consistente en la creación de un frontend con angular simulando una app de gestión hospitalaria

## Objetivos

- Creación de una arquitectura avanzada de frontend MVC 
- Gestión de usuarios con distintos roles
- Uso avanzado de servicios siguiendo el principio de responsabilidad única.
- Centralizar el estado de la app en un servicio central (llamado por ejemplo stateManagerService o dataService ) del cuál se nutren todos los componentes y servicios
- Creación de vistas publicas y privadas gestionadas por el router del frontend haciendo uso del evento canActivate de la configuración del router


## Roles

- Doctor 
- Patient
- Technical
- Admin (permiso root: puede hacer todo)


## Api

Simulada la interacción con un backend mediante un servicio fake (mock) 

- login()

- getPatients()   // doctor, admin
- getPatient(uid) //  doctor, admin, patient
- postPatient(patient) // technical

- getMedicalHistories() // doctor, admin
- getMedicalHistory(id)  // doctor, admin, patient
- postMedicalHistory(medicalHistory) // doctor

- postDoctor(doctor)  // technical
- postPatient(patient) // technical
- postTechnical(technical) // technical

### Vistas

- Públicas
    - /login
- Privadas todos
    - /dashboard (distribuidor da acceso al resto de vistas privadas según el role )
- Privadas doctor
    - /patients
    - /patient/:id
    - /histories
    - /history/:id
- Privadas technical
    - /newUser/:role (role === 'admin' || role === 'doctor' || role === 'technical' )
- Privadas patient
    - /patient/:id  sólo puede ver su ficha
    - /history/:id  sólo puede ver su historial

## Datos de ejemplo (Usuarios de login)

- { role: 'admin', uid: '000', name: 'Manolo', surname: 'Fernandez', dni: '123456789K', email: 'manolo@email.com', password: '0' },
- { role: 'technical', uid: '001', name: 'Juan Elias', surname: 'Guerra', dni: '123456789N', email: 'jelias@email.com', password: '1' },
- { role: 'doctor', uid: '010', name: 'Víctor', surname: 'Vanaclocha', dni: '123456789L', email: 'victor@email.com', password: '10' },
- { role: 'doctor', uid: '011', name: 'Kike', surname: 'Martinez', dni: '123456789M', email: 'kike@email.com', password: '11' },
- { role: 'patient', uid: '100', name: 'Juan', surname: 'Garnica', dni: '123456789G', email: 'juan@email.com', password: '100' },
- { role: 'patient', uid: '101', name: 'Xavi', surname: 'Rodriguez', dni: '123456789C', email: 'xavi@email.com', password: '101' },
- { role: 'patient', uid: '102', name: 'Javi', surname: 'Olmo', dni: '123456789D', email: 'javi@email.com', password: '102' }