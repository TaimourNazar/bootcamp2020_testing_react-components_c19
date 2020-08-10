import React from 'react';
 
function AppSearch() {
  const [textSearch, setTextSearch] = React.useState('');
 
  function handleChange(event:any) {
    setTextSearch(event.target.value);
  }
 
  return (
    <div>
      <Search value={textSearch} onChange={handleChange}>Search</Search>
      <p>Typescript and {textSearch ? textSearch : '.....'}</p>
    </div>
  );
}
 
type SearchProps={
  value:string,
  onChange:any,
  children:any
}
function Search({ value, onChange, children }:SearchProps) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange}/>
    </div>
  );
}
 
export default AppSearch;