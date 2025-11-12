# Invoice App

Uma aplicação Next.js moderna para administrar entrada e saídas de "invoices"

## 🚀 Funcionalidades

- **🔍 Controle de Contas**:
- **🧪 Testes Abrangentes**: Testes unitários com Vitest e Testing Library
- **📚 Documentação**: Storybook para documentação de componentes
- **⚡ Performance**: Otimizado para rápido carregamento

## 🛠 Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: SCSS
- **Testes**: Vitest + React Testing Library
- **Documentação**: Storybook
- **Linting**: ESLint

1. **Clone o repositório**

```bash
git clone <repository-url>
cd invoice-app
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute em desenvolvimento**

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📖 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm run start

# Linting
npm run lint

# Testes
npm test
npm run test:watch
npm run test:coverage

# Storybook
npm run storybook
npm run build-storybook

# Type checking
npm run type-check
```

## 🧪 Testes

### Estrutura de Testes

- **Testes Unitários**: Componentes individuais
- **Testes de Integração**: Hooks e serviços
- **Testes de UI**: Interações do usuário

### Executar Testes

```bash
# Todos os testes
npm test

# Modo watch
npm run test:watch

# Com coverage
npm run test:coverage

# Testes específicos
npm test -- UserCard.test.tsx
```

## 📚 Storybook

Documentação interativa dos componentes:

```bash
# Desenvolvimento
npm run storybook

# Build
npm run build-storybook
```

Acesse em `http://localhost:6006` para explorar todos os componentes.

## 🎨 Estilização

- Cores semânticas
- Tipografia consistente
- Componentes acessíveis

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
