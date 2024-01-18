// DashboardPage.js

import React from 'react';
import Logo from '../../iamge/logo.png'
import Card from '../../components/Card';
import Sade from '../Data';
import './Dashboard.css';

class DashboardPage extends React.Component {
  state = {
    focus: false,
    searchQuery: '',
    sirensFilter: 'all',
    geotechnicalFilter: 'all',
    typeFilter: 'all',
    purposeFilter: 'all',
  };

  focus = (event) => {
    event.preventDefault();
    this.setState({
      focus: !this.state.focus,
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  handleSirensFilterChange = (event) => {
    this.setState({
      sirensFilter: event.target.value,
    });
  };

  handleGeotechnicalFilterChange = (event) => {
    this.setState({
      geotechnicalFilter: event.target.value,
    });
  };

  handleTypeFilterChange = (event) => {
    this.setState({
      typeFilter: event.target.value,
    });
  };

  handlePurposeFilterChange = (event) => {
    this.setState({
      purposeFilter: event.target.value,
    });
  };

 filterSade = () => {
  const { searchQuery, sirensFilter, geotechnicalFilter, typeFilter, purposeFilter } = this.state;

  return Sade.filter((item) => {
    // Apply search query filter
    const searchFilter = item.d_name.includes(searchQuery);

    // Apply filters for Sirens, Geotechnical, Type, and Purpose
    const sirensFilterCondition =
      sirensFilter === 'all' || (sirensFilter === 'yes' && item.Sirens === '1') || (sirensFilter === 'no' && item.Sirens === '0');

    const geotechnicalFilterCondition =
      geotechnicalFilter === 'all' ||
      (geotechnicalFilter === 'yes' && item.Geotechnical === '1') ||
      (geotechnicalFilter === 'no' && item.Geotechnical === '0');

    const typeFilterCondition =
      typeFilter === 'all' || item.type.includes(typeFilter);

    // Check if 'Purpose' exists before applying the filter condition
    const purposeFilterCondition =
  purposeFilter === 'all' || (item["purpose "] && item["purpose "].trim().toLowerCase() === purposeFilter.trim().toLowerCase());



    return searchFilter && sirensFilterCondition && geotechnicalFilterCondition && typeFilterCondition && purposeFilterCondition;
  });
};
  
  

  render() {
    const filteredSade = this.filterSade();

    return (
      <>
      <div className='container'>
        <div className="header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          
          <img src={Logo} alt='' className='logo' />
        </div>

        
          <div className="">
            <input
              type="text"
              className={this.state.focus ? 'focused' : ''}
              placeholder="ادخل اسم السد"
              value={this.state.searchQuery}
              onChange={this.handleSearchChange}
            />
           
          </div>
        

        <div className="filter-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <label htmlFor="sirens-filter">صافرات الانذار:</label>
          <select
            id="sirens-filter"
            value={this.state.sirensFilter}
            onChange={this.handleSirensFilterChange}
          >
            <option value="all">الكل</option>
            <option value="yes">موجودة</option>
            <option value="no">غير موجودة </option>
          </select>

          <label htmlFor="geotechnical-filter">الأجهزة الجيوتقنية:</label>
          <select
            id="geotechnical-filter"
            value={this.state.geotechnicalFilter}
            onChange={this.handleGeotechnicalFilterChange}
          >
            <option value="all">الكل</option>
            <option value="yes">موجودة </option>
            <option value="no">غير موجودة </option>
          </select>

          <label htmlFor="type-filter">  نوع السد:</label>
          <select
            id="type-filter"
            value={this.state.typeFilter}
            onChange={this.handleTypeFilterChange}
          >
            <option value="all">الكل</option>
            <option value="خرساني">خرساني</option>
            <option value="ترابي">ترابي</option>
            <option value="ركامي">ركامي</option>
            <option value="جوفي">جوفي</option>
          </select>

          <label htmlFor="purpose-filter">الغرض من  :</label>
          <select
            id="purpose-filter"
            value={this.state.purposeFilter}
            onChange={this.handlePurposeFilterChange}
          >
            <option value="all">الكل</option>
            <option value="حماية">حماية</option>
            <option value="استعاضة">استعاضة</option>
            <option value="للشرب">للشرب</option>
            <option value="جوفي">جوفي</option>
          </select>
        </div>

        <div className="cards">
  {filteredSade.map((item) => (
    <Card
      key={item.id}
      id={parseInt(item.id, 10)}
      img={item.photo}
      title={item.d_name}
      description={`نوع السد: ${item.type}`}
      author={`المحافظة: ${item.governorate}`}
    />
  ))}
</div>
        </div>
      </>
    );
  }
}

export default DashboardPage;
