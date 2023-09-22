import { useState, useEffect } from 'react';
import Input from './Input';

export default function Config({ status, setcurrentColor, currentColor }) {
  const boxSize = 20;
  const colors = [
    {
      name: 'Rose',
      code: '#be123c',
    },
    {
      name: 'Pink',
      code: '#be185d',
    },
    {
      name: 'Fuchsia',
      code: '#701a75',
    },
    {
      name: 'Purple',
      code: '#7e22ce',
    },
    {
      name: 'Violet',
      code: '#5b21b6',
    },
    {
      name: 'Indigo',
      code: '#3730a3',
    },
    {
      name: 'Violet',
      code: '#5b21b6',
    },
    {
      name: 'Blue',
      code: '#1d4ed8',
    },
    {
      name: 'Sky',
      code: '#0369a1',
    },
    {
      name: 'Cyan',
      code: '#0891b2',
    },
    {
      name: 'Teal',
      code: '#0f766e',
    },
    {
      name: 'Emerald',
      code: '#047857',
    },
    {
      name: 'Green',
      code: '#15803d',
    },
    {
      name: 'Lime',
      code: '#65a30d',
    },
    {
      name: 'Yellow',
      code: '#eab308',
    },
    {
      name: 'Amber',
      code: '#d97706',
    },
    {
      name: 'Red',
      code: '#b91c1c',
    },
    {
      name: 'Slate',
      code: '#475569',
    },
    {
      name: 'Gray',
      code: '#4b5563',
    },
    {
      name: 'Zinc',
      code: '#3f3f46',
    },
    {
      name: 'Black',
      code: '#0a0a0a',
    },
  ];

  const [colorField, setcolorField] = useState('#0369a1');
  const [currentId, setCurrentId] = useState(0);

  function rgbToHex(rgba, forceRemoveAlpha = false) {
    return (
      '#' +
      rgba
        .replace(/^rgba?\(|\s+|\)$/g, '')
        .split(',')
        .filter((string, index) => !forceRemoveAlpha || index !== 3)
        .map((string) => parseFloat(string))
        .map((number, index) =>
          index === 3 ? Math.round(number * 255) : number
        )
        .map((number) => number.toString(16))
        .map((string) => (string.length === 1 ? '0' + string : string))
        .join('')
    );
  }

  function handleColor() {
    setTimeout(() => {
      const colorSquare = document.getElementsByClassName('picked-color');
      const rgbColor = window
        .getComputedStyle(colorSquare[0], null)
        .getPropertyValue('background-color');
      const hexColor = rgbToHex(rgbColor);
      setcurrentColor(hexColor);
    }, '30');
  }

  function handleChange(e) {
    setcolorField(e.target.value);
    handleColor();
    setCurrentId(111);
  }

  function handleColorPick(colorN) {
    setcolorField(colors[colorN].code);
    handleColor();
  }

  function addClass(e) {
    e.target.classList.add('active');
  }

  function onClickFunction(e, i) {
    handleColorPick(i);
    addClass(e);
    setCurrentId(i);
  }

  return (
    <div className="card">
      {status === 0 ? (
        <>
          <div className="color filling">
            <h1>Configuration</h1>
            <div className="pick-color">
              <h2>Pick a color</h2>
              <div
                className="picked-color"
                id={colorField}
                style={{
                  height: 2 * boxSize + 'px',
                  width: 2 * boxSize + 'px',
                  backgroundColor: colorField,
                }}
              ></div>
            </div>

            <Input
              className="input"
              text={colorField}
              handleChange={handleChange}
              type="text"
              id="color"
              label="Color"
            />

            <div className="color-container">
              {colors.map((color, i) => {
                return (
                  <div
                    key={i + 'palette' + color.name}
                    className="color-square"
                    onClick={() => onClickFunction(event, i)}
                    style={
                      currentId === i
                        ? {
                            height: 1.9 * boxSize + 'px',
                            width: 2.4 * boxSize + 'px',
                            backgroundColor: color.code,
                            border: 2 + 'px solid #64748b',
                          }
                        : {
                            height: 2 * boxSize + 'px',
                            width: 2.4 * boxSize + 'px',
                            backgroundColor: color.code,
                          }
                    }
                  ></div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <br></br>
      )}
    </div>
  );
}
