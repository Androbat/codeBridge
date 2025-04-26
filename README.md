## Project Structure

The project follows the Atomic Design pattern:

```
src/
  ├── app/                 # Next.js app directory
  ├── components/         # React components
  │   ├── atoms/         # Basic building blocks
  │   ├── molecules/     # Simple combinations of atoms
  │   ├── organisms/     # Complex combinations of molecules
  │   └── templates/     # Page layouts
  └── styles/            # Global styles
```

## Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint
- `npm run type-check` - Runs TypeScript compiler

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
