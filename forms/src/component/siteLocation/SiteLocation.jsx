import { CButton } from "@coreui/bootstrap-react";
import { TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SiteContext } from "../../context/Context";

const SiteLocation = () => {
  const [siteData, setSiteData] = useContext(SiteContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const inputCooredinates = async (register) => {
    const coordinates = await axios.get(
      `https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=pJgcanuedOhsuiIxhcjIImo2Qg2jvjxgVzhqG1Se&lat=${register.lat}&lon=${register.lon}`,
      register
    );

    setSiteData({
    //   lat: register.lat,
    //   lon: register.lon,
      psh: coordinates.data.outputs.avg_lat_tilt.annual
      ,
    });
    // console.log(coordinates);
    return inputCooredinates;
  };

  useEffect(() => {
    inputCooredinates();
  }, [register.lat, register.lon]);

  console.log(siteData);



  return (
    <form
      onSubmit={handleSubmit(inputCooredinates)}
      className="d-grid gap-2 col-6 md-4 mx-auto"
    >
      <Typography variant="h5" sx={{ mx: 2, mt: 3 }}>
        Project Geographical Coordinates
      </Typography>
      <TextField
        sx={{ my: 1, mx: 2 }}
        label="Latitude in degree"
        {...register("lat", { required: true })}
      />
      <TextField
        sx={{ my: 1, mx: 2 }}
        label="Longitude in degree"
        {...register("lon", { required: true })}
      />
      {errors.lat && <p color="warning">Latitude input is required.</p>}
      {errors.log && <p>Longitude input is required.</p>}
      <div>
        <CButton
          color="btn btn-primary rounded-3"
          size="lg"
          type="submit"
          value="submit"
          style={{ marginLeft: "20px" }}
        >
          Submit
        </CButton>


      </div>
    </form>
  );
};

export default SiteLocation;
