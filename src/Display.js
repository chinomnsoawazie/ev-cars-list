import { YearsList, MakesList, TrimsList, ModelsList } from './index';
const Display = () => {
  function setMake(makeSelection) {
    localStorage.setItem('Make', makeSelection.value);
  }

  function setModel(modelSelection) {
    localStorage.setItem('Model', modelSelection.value);
  }
  function setTrim(trimSelection) {
    localStorage.setItem('Trim', trimSelection.value);
  }
  function setYear(makeSelection) {
    localStorage.setItem('Make', makeSelection.value);
  }

  const selectedMake = localStorage.getItem('Make');
  const modelsList = ModelsList.find((list) => list.key === selectedMake);

  const selectedModel = localStorage.getItem('Model');
  const trimsList = TrimsList.find((make) => {
    make.key === selectedMake;
  }).find((model) => model.key === selectedModel);

  return (
    <div>
      <div>
        <h3>Make</h3>
        <select id="make" onChange={() => setMake(makeSelection)}>
          {MakesList.map((make) => (
            <option value={make.value}>{make.value}</option>
          ))}
        </select>
      </div>
      <div>
        <h3>Model</h3>
        <select id="years" onChange={() => setModel(modelSelection)}>
          {modelsList.map((model) => (
            <option value={model.value}>{model.value}</option>
          ))}
        </select>
      </div>
      <div>
        <h3>Trim</h3>
        <select id="years">
          {trimsList.map((trim) => (
            <option value={trim.value}>{trim.value}</option>
          ))}
        </select>
      </div>
      <div>
        <h3>Year</h3>
        <select id="years">
          {YearsList.map((year) => (
            <option value={year.key}>{year.value}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { Display };
