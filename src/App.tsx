import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import "./App.css";
import {
  Select,
  FileUpload,
  Button,
  FileTypes,
  ButtonTypes,
} from "./components/index.ts";
import { MODELS } from "./mockData.ts";
import { postData } from "./api.ts";

function readFileContents(
  file: File,
  stateSetter: Dispatch<SetStateAction<string>>
) {
  const reader = new FileReader();

  reader.onload = () => {
    const content = reader.result as string;
    stateSetter(content);
  };

  reader.readAsText(file);
}

interface Car {
  make: string;
  model: string;
  badge: string;
}

function App() {
  const [car, setCar] = useState<Car>({ make: "", model: "", badge: "" });
  const [fileContent, setFileContent] = useState<string>("");

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      readFileContents(file, setFileContent);
    }
  };

  const makeOptions = Object.keys(MODELS).map((make) => {
    return { name: make, value: make };
  });

  const modelOptions = car.make
    ? Object.keys(MODELS[car.make]).map((model) => {
        return { name: model, value: model };
      })
    : [];

  const badgeOptions = car.model
    ? MODELS[car.make][car.model].map((badge) => {
        return { name: badge, value: badge };
      })
    : [];

  const [uploaded, setUploaded] = useState();
  console.log("POST request response", uploaded);

  const handleSubmit = async () => {
    const response = await postData("/upload", {
      ...car,
      logbook: fileContent,
    });

    setUploaded(response);
  };

  return (
    <>
      <h1>Vehicle Selection Form</h1>
      <div className="flex flex-column container">
        <Select
          label="Make"
          options={makeOptions}
          value={car.make}
          onChange={(value) => setCar({ make: value, model: "", badge: "" })}
        />
        {car.make && (
          <Select
            label="Model"
            options={modelOptions}
            value={car.model}
            onChange={(value) => setCar({ ...car, model: value, badge: "" })}
          />
        )}
        {car.model && (
          <Select
            label="Badge"
            options={badgeOptions}
            value={car.badge}
            onChange={(value) => setCar({ ...car, badge: value })}
          />
        )}
        {car.badge && (
          <>
            <FileUpload
              label="Upload logbook"
              acceptedType={FileTypes.Txt}
              onChange={(event) => handleFileUpload(event)}
            />
            <Button
              label="Submit"
              type={ButtonTypes.Button}
              onClick={handleSubmit}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
