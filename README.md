# first-ui

Librería de componentes UI pensada para ser transversal a múltiples productos.  
Incluye tokens (CSS variables), theming, Storybook como documentación viva y tests unitarios.

## Objetivo
Reducir inconsistencias visuales y duplicación de código mediante una base compartida de componentes accesibles, tipados y fáciles de integrar.

---

## Stack
- React + TypeScript
- Vite (library mode) para build
- Storybook para documentación/visual testing
- Jest + Testing Library para tests unitarios
- CSS variables (design tokens) para theming

---

## Quick start

```bash
npm install
npm run dev
npm run storybook
npm test

---

## Decisiones de diseño

- **Vite (library mode):** build rápido y preparado para tree-shaking.
- **CSS variables:** theming sin acoplar estilos a los componentes.
- **Storybook:** documentación viva y visual testing.
- **Arquitectura simple:** se prioriza claridad y mantenibilidad sobre complejidad innecesaria (monorepo como posible evolución).


---

## Estructura

```
first-ui/
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── vitest.setup.ts
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   ├── button.css
│   │   │   └── index.ts
│   │   └── TextField/
│   │       ├── TextField.stories.tsx
│   │       ├── TextField.test.tsx
│   │       ├── TextField.tsx
│   │       ├── TextField.types.ts
│   │       ├── index.ts
│   │       └── textfield.css
│   ├── styles/
│   │   ├── index.css
│   │   ├── theme.css
│   │   └── tokens.css
│   ├── test/
│   │   ├── setup.ts
│   │   └── styleMock.ts
│   ├── utils/
│   │   └── cn.ts
│   ├── App.tsx
│   ├── index.ts
│   └── main.tsx
``` 
---

## Design tokens y theming
- Tokens en `src/styles/tokens.css` (colores, espaciados, radios, focus ring).
- Dark theme en `src/styles/theme.css` usando:
  - `data-theme="dark"`

Esto permite escalar a múltiples marcas/productos sin reescribir componentes.

---

## Componentes implementados

### Button
Incluye:
- Variants: `primary | secondary | danger | ghost`
- Sizes: `sm | md | lg`
- Estados: `disabled`, `loading`
- Accesibilidad:
  - `aria-busy` cuando está `loading`
  - soporte para `aria-label` y atributos estándar del botón

### TextField

Componente de formulario de alto nivel, pensado para uso consistente y accesible.

Incluye:
- `label` asociado automáticamente al input
- `helperText` y `errorMessage`
- Estado de error con:
  - `aria-invalid`
  - `aria-describedby`
  - mensaje anunciado con `role="alert"`
- Soporte para `disabled`
- Generación automática de `id` mediante `useId()`
- Preparado para validaciones y formularios reales

---

## Accesibilidad (a11y)

La accesibilidad fue considerada como un requisito transversal desde el diseño de los componentes.

Los componentes siguen buenas prácticas de accesibilidad:

- Uso de HTML semántico (`button`, `label`, `input`)
- Asociación correcta entre `label` e inputs
- Estados anunciados a lectores de pantalla mediante atributos ARIA
- Manejo visible del foco (`:focus-visible`)

Storybook incluye el addon de accesibilidad como apoyo para validación visual.


---

## Testing

### Unit tests con Jest + Testing Library:
- render del label
- disabled no dispara click
- loading deshabilita + setea `aria-busy`
- aplica clases por variant/size
- validaciones de accesibilidad en TextField (`aria-invalid`, `aria-describedby`)


### Visual testing:
  - Storybook como documentación viva y apoyo para validación visual manual de estados/variantes.

---

## Versionamiento (SemVer)
Se propone Semantic Versioning:
- PATCH: fixes sin romper API
- MINOR: features compatibles
- MAJOR: cambios que rompen compatibilidad

---

## Distribución / Publicación (propuesta)
Este repo está preparado para empaquetar como librería mediante Vite library mode.
- `peerDependencies`: React y ReactDOM (evita duplicación y conflictos de hooks).
- Salida en `dist/` con ESM + CJS + tipos (`d.ts`).

En un siguiente paso (si el contexto lo requiere), se puede migrar a monorepo con npm workspaces:
- `packages/ui`
- `packages/tokens`
- y automatizar changelog/versionado con Changesets.

---

## Scripts

### Desarrollo (playground)
```bash
npm run dev
```

### Build de librería
```bash
npm run build
```

### Tests unitarios
```bash
npm run test
```

### Storybook
```bash
npm run storybook
```

### Build Storybook
```bash
npm run build-storybook
```

### Preview
```bash
npm run preview
```
