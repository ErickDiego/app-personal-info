# 📚 Guía de Integración: Componentes con MongoDB

## Arquitectura

```
app/
├── api/
│   └── portfolio/
│       ├── route.ts (GET todos los datos)
│       ├── personal/route.ts
│       ├── workplaces/route.ts
│       ├── skills/route.ts
│       ├── certifications/route.ts
│       └── contacts/route.ts
├── components/
│   ├── HeroSection.tsx (ACTUALIZADO ✅)
│   ├── SkillsSection.tsx (ACTUALIZADO ✅)
│   ├── CertificationsSection.tsx (ACTUALIZADO ✅)
│   ├── ContactSection.tsx (ACTUALIZADO ✅)
│   ├── DescriptionSection.tsx
│   ├── WorkplacesSection.tsx
│   └── ...
└── data/
    └── portfolio.ts (datos estáticos, ya no se usan)

lib/
├── mongodb.ts (conexión a BD)
├── seed.ts (función para cargar datos iniciales)
├── portfolioService.ts (servicio con métodos fetch)
└── usePortfolioData.ts (hook personalizado)
```

## Archivos Creados

### 1. **`lib/portfolioService.ts`**
Servicio que encapsula todas las llamadas a la API
```typescript
portfolioService.getPersonal()      // GET /api/portfolio/personal
portfolioService.getWorkplaces()    // GET /api/portfolio/workplaces
portfolioService.getSkills()        // GET /api/portfolio/skills
portfolioService.getCertifications() // GET /api/portfolio/certifications
portfolioService.getContacts()      // GET /api/portfolio/contacts
portfolioService.getAll()           // GET /api/portfolio (todos los datos)
```

### 2. **`lib/usePortfolioData.ts`**
Hook personalizado de React para manejar estados de carga, error y datos
```typescript
const { data, loading, error } = usePortfolioData(() => portfolioService.getSkills());
```

### 3. **Endpoints API** (en `app/api/portfolio/`)
- `GET /api/portfolio` - Obtiene todos los datos
- `GET /api/portfolio/personal` - Datos personales
- `GET /api/portfolio/workplaces` - Experiencias laborales
- `GET /api/portfolio/skills` - Habilidades técnicas
- `GET /api/portfolio/certifications` - Certificaciones
- `GET /api/portfolio/contacts` - Información de contacto

## Cómo Usar en Componentes

### Patrón Básico

```tsx
'use client';

import { usePortfolioData } from '@/lib/usePortfolioData';
import { portfolioService } from '@/lib/portfolioService';

export function MiComponente() {
  const { data, loading, error } = usePortfolioData(() => 
    portfolioService.getSkills()
  );

  // Estado: cargando
  if (loading) return <div>Cargando...</div>;

  // Estado: error
  if (error || !data) return <div>Error: {error}</div>;

  // Estado: éxito - usar los datos
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

## Componentes Ya Actualizados

✅ **HeroSection** - Lee `personal` data
✅ **SkillsSection** - Lee `skills` data
✅ **CertificationsSection** - Lee `certifications` data
✅ **ContactSection** - Lee `contacts` y `personal` data

## Componentes Pendientes de Actualizar

- [ ] **DescriptionSection** - Debería leer de `personal.description`
- [ ] **WorkplacesSection** - Debería leer de `workplaces`
- [ ] **Footer** - Si lo necesita

## Cargar Datos en MongoDB

Para cargar/actualizar los datos inicialmente:

```bash
node scripts/seed.js
```

Esto sincronizará el archivo `app/data/portfolio.ts` a MongoDB.

## Ventajas de Esta Arquitectura

✅ **Datos Centralizados**: Un único lugar (MongoDB) como fuente de verdad
✅ **Sin Duplicación**: No hay dos copias de los datos
✅ **Dinámico**: Los cambios en la BD se reflejan al recargar
✅ **Escalable**: Fácil agregar nuevas secciones
✅ **Type-Safe**: TypeScript en toda la cadena
✅ **Manejo de Estados**: Loading, error, data listos

## Flujo de Datos

```
MongoDB Atlas
    ↓
/api/portfolio/[section]
    ↓
portfolioService.get[Section]()
    ↓
usePortfolioData(fetcher)
    ↓
Componentes React
```

## Próximos Pasos

1. Actualizar `WorkplacesSection` y `DescriptionSection`
2. Agregar validación de tipos con Zod (opcional)
3. Implementar caché en cliente (React Query/SWR)
4. Agregar panel admin para editar datos sin modificar código
