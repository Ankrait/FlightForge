import '@testing-library/jest-dom';

// Добавьте полифиллы для TextEncoder и TextDecoder
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
