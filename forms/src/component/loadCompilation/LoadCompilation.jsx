import React from "react";
import {
  useForm,
  useFieldArray,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

function LoadCompilation() {
 
  const methods = useForm();

  const onSubmit = (data) => console.log(data);

  const { register, control, reset, setError } = methods;

  console.log(methods);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "load",
  });
  console.log(...fields);
  return (
    <FormProvider {...methods}>
      {/* <table>
            <thead>
                <tr>
                    
                    <th>SN</th>
                    <th>Appliance</th>
                    <th>Rated Wattage (AC) (W)</th>
                    <th>Qty</th>
                    <th>1 for DC</th>
                    <th>Invertor efficiency for AC</th>
                    <th>Adjusted Wattage (A/B)</th>
                    <th>Used hrs/day (hrs)</th>
                    <th>Energy/day (C*D)</th>
                </tr>
            </thead>
           
        </table> */}

        <h4>Add load compilation data</h4>

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ol>
          {fields.map((item, index) => (
            <li key={item.id}>
              <Controller
                name={`load.${index}.Appliances`}
                render={({ field }) => (
                  <input placeholder="Appliance name" {...field} />
                )}
                control={control}
                rules={{ required: true }}
              />
              <input
                placeholder="Rated_AC_Wattage"
                type="number"
                step="0.1"
                {...register(`load.${index}.Rated_AC_Wattage`, {
                  required: true,
                })}
              />
              <input
                placeholder="Appliance Qty"
                type="number"
                {...register(`load.${index}.Qty`, { required: true })}
              />
              <input
                placeholder="AC/DC Adjustment factor"
                type="number"
                step="0.001"
                {...register(`load.${index}.factor`, { required: true })}
              />
              <input
                placeholder="Daily hrs usage"
                type="number"
                step="0.1"
                {...register(`load.${index}.hrs`, { required: true })}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() =>
            append({
              Appliances: "",
              Rated_AC_Wattage: "",
              Qty: "",
              factor: "",
              hrs: "",
            })
          }
        >
          Add
        </button>
        <input type="submit" />
        <button
          type="button"
          onClick={() =>
            reset({
              load: [{}],
            })
          }
        >
          Reset
        </button>
      </form>
    </FormProvider>
  );
}

export default LoadCompilation;
