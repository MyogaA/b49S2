import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

interface AppState {
  provinces: any[];
  selectedProvinces: string | null;
  regencies: any[];
  selectedRegencies: string | null;
  subdistricts: any[];
  selectedSubdistricts: string | null;
  ward: any[];
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      provinces: [],
      selectedProvinces: null,
      regencies: [],
      selectedRegencies: null,
      subdistricts: [],
      selectedSubdistricts: null,
      ward: [],
    };
  }

  async componentDidMount() {
    this.getProvince();
  }

  async getProvince() {
    try {
      const resProvince = await fetch("https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/provinces.json");
      const dataProvince = await resProvince.json();

      const resRegencies = await fetch("https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/regencies.json");
      const dataRegencies = await resRegencies.json();

      const resSubdisctricts = await fetch("https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/districts.json");
      const dataSubdisricts = await resSubdisctricts.json();

      const resWards = await fetch("https://raw.githubusercontent.com/vionaaindah/GeoID-API/main/villages.json");
      const dataWards = await resWards.json();

      this.setState({
        provinces: dataProvince,
        regencies: dataRegencies,
        subdistricts: dataSubdisricts,
        ward: dataWards,
      });
    } catch (error:any) {
      console.error(error.message);
    }
  }

  render() {
    return (
      <div className="main">
        <Place
          option={"Select a province"}
          content={this.state.provinces}
          handleSelect={(value: string | null) => this.setState({ selectedProvinces: value })}
        >
          Provinces
        </Place>
        <Place
          option={"Select a regency"}
          content={this.state.regencies.filter(
            (regency) => regency.province_id === this.state.selectedProvinces
          )}
          handleSelect={(value: string | null) => this.setState({ selectedRegencies: value })}
        >
          Regencies
        </Place>
        <Place
          option={"Select a subdistrict"}
          content={this.state.subdistricts.filter(
            (subdisctict) => subdisctict.regency_id === this.state.selectedRegencies
          )}
          handleSelect={(value: string | null) => this.setState({ selectedSubdistricts: value })}
        >
          Subdistricts
        </Place>
        <Place
          option={"Select a ward"}
          content={this.state.ward.filter(
            (wards) => wards.district_id === this.state.selectedSubdistricts
          )}
        >
          Wards
        </Place>
      </div>
    );
  }
}

interface PlaceProps {
  children: React.ReactNode;
  option: string;
  content: any[];
  handleSelect?: (value: string | null) => void;
}

class Place extends Component<PlaceProps> {
  static propTypes: { children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>; option: PropTypes.Validator<string>; content: PropTypes.Requireable<any[]>; handleSelect: PropTypes.Requireable<(...args: any[]) => any>; };
  render() {
    const { children, option, content, handleSelect } = this.props;
    return (
      <div className="container">
        <span>{children}</span>
        <select
          placeholder="select"
          onChange={(e) => handleSelect && handleSelect(e.target.value)}
        >
          <option value="" hidden>
            {option}
          </option>
          {content &&
            content.map((daerah) => (
              <option key={daerah.id} value={daerah.id}>
                {daerah.name}
              </option>
            ))}
        </select>
      </div>
    );
  }
}

Place.propTypes = {
  children: PropTypes.node.isRequired,
  option: PropTypes.string.isRequired,
  content: PropTypes.array,
  handleSelect: PropTypes.func,
};

export default App;
