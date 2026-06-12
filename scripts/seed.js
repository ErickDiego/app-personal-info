const { MongoClient } = require('mongodb');

// Cargar variables de entorno desde .env.local
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('❌ Error: MONGODB_URI no está configurada en .env.local');
  process.exit(1);
}

// Datos del portafolio
const portfolioData = {
  personal: {
    name: "Erick Neculhueque",
    title: "Ingeniero en Informática",
    email: "erickneculhueque@gmail.com",
    linkedin: "https://linkedin.com/in/eneculhueque",
    description: "Ingeniero en Informática apasionado por desarrollar soluciones tecnológicas innovadoras. Especializado en desarrollo de aplicaciones web y backend. Con experiencia en lenguajes de programación modernos y bases de datos.",
    heroTitle: "Desarrollo de Soluciones Tecnológicas",
  },
  workplaces: [
    {
      id: 1,
      name: "Entel",
      position: "Ingeniero de Software",
      description: "Desarrollo de soluciones backend y frontend para plataformas de telecomunicaciones.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Entel_logo.svg/1200px-Entel_logo.svg.png",
      startDate: "2022",
      endDate: "2024",
    },
  ],
  skills: [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗄️" },
    { name: "mongoDB", icon: "🍃" },
    { name: "Node.js", icon: "⚙️" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "PostgreSQL", icon: "🗄️" },
    { name: "REST API", icon: "🔌" },
    { name: "Git", icon: "🔧" },
    { name: "Docker", icon: "🐳" },
    { name: "GitHub", icon: "🐙" },
    { name: "Agile Methodologies", icon: "🚀" },
    { name: "golang", icon: "🐹" },
    { name: ".NET", icon: "🔗" },
    { name: "C#", icon: "🔗" },
    { name: "vb.net", icon: "🔗" },
  ],
  certifications: [
    { id: 1, name: "Certificación Profesional en Ingeniería de Software", issuer: "Institución Educativa", year: 2023 },
    { id: 2, name: "Certificación TMFs", issuer: "Institución Educativa", year: 2025 },
  ],
  contacts: [
    { type: "email", label: "Email", value: "erickneculhueque@gmail.com", url: "mailto:erickneculhueque@gmail.com", icon: "📧" },
    { type: "linkedin", label: "LinkedIn", value: "eneculhueque", url: "https://linkedin.com/in/eneculhueque", icon: "💼" },
    { type: "phone", label: "Teléfono", value: "+56 9 XXXX XXXX", url: "tel:+56912345678", icon: "📱" },
  ],
};

async function seedDatabase() {
  const client = new MongoClient(uri);
  
  try {
    console.log('\n📡 Conectando a MongoDB...');
    await client.connect();
    console.log('✅ Conexión exitosa a MongoDB');

    const db = client.db('personal-info');
    const collection = db.collection('portfolio');

    console.log('\n📝 Insertando/actualizando datos...');
    
    // Upsert cada sección
    const sections = ['personal', 'workplaces', 'skills', 'certifications', 'contacts'];
    
    for (const section of sections) {
      await collection.updateOne(
        { type: section },
        { 
          $set: {
            type: section,
            data: portfolioData[section],
            updatedAt: new Date(),
          }
        },
        { upsert: true }
      );
      console.log(`  ✓ ${section}`);
    }

    console.log('\n📊 Verificando datos en MongoDB:');
    const documents = await collection.find({}).toArray();
    documents.forEach(doc => {
      console.log(`\n📌 ${doc.type.toUpperCase()}`);
      console.log('  Último actualizado:', doc.updatedAt);
      if (Array.isArray(doc.data)) {
        console.log(`  Registros: ${doc.data.length}`);
      } else {
        console.log('  Registros: 1 objeto');
      }
    });

    console.log('\n✅ Datos sincronizados correctamente en MongoDB\n');
  } catch (error) {
    console.error('\n❌ Error:', error.message, '\n');
    process.exit(1);
  } finally {
    await client.close();
  }
}

seedDatabase();
