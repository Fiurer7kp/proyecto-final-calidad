import { render, screen, fireEvent } from '@testing-library/react';
import CalculadoraBasica from './CalculadoraBasica';

describe('CalculadoraBasica', () => {
  test('renderiza correctamente', () => {
    render(<CalculadoraBasica />);
    expect(screen.getByText('Calculadora Básica')).toBeInTheDocument();
  });

  test('realiza suma correctamente', () => {
    render(<CalculadoraBasica />);
    
    const input1 = screen.getByPlaceholderText('Número 1');
    const input2 = screen.getByPlaceholderText('Número 2');
    const botonCalcular = screen.getByText('Calcular');

    fireEvent.change(input1, { target: { value: '5' } });
    fireEvent.change(input2, { target: { value: '3' } });
    fireEvent.click(botonCalcular);

    expect(screen.getByText('Resultado: 8')).toBeInTheDocument();
  });

  test('muestra error con números inválidos', () => {
    render(<CalculadoraBasica />);
    
    const input1 = screen.getByPlaceholderText('Número 1');
    const botonCalcular = screen.getByText('Calcular');

    fireEvent.change(input1, { target: { value: 'abc' } });
    fireEvent.click(botonCalcular);

    expect(screen.getByText(/Error: Ingresa números válidos/)).toBeInTheDocument();
  });
});