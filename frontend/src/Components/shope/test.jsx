{checkboxItems.map((item, index) => (
    <div key={index} style={{ display: "flex", alignItems: "flex-start" }}>
      <input
        type="checkbox"
        value={item}
        // onChange={handleCheckboxChange}
        onClick={(e) => {
          setunchecked(false);

          if (e.target.checked) {
            if (Arr.length === 0) {
              setUrl(url + `&Material=${e.target.value}`);
              Arr.push(e.target.value);
            } else {
              Arr.map((i) => {
                return setUrl(url + "," + `${i + 1}`);
              });
            }
          } else if (!e.target.checked) {
            let newUrl = url.replace(/(\?|&)Material=[^&]*/g, "");
            setUrl(newUrl);
            Arr.pop(e.target.value);
          }
          // axios.get(`http://127.0.0.1:8000/api/products/?Color=${e.target.value}&limit=25`).then((res)=>{
          //   setrow([])
          //   console.log(res.data);
          //   setrow(res.data)
          // })
        }}
      />
      <label>{item}</label>
    </div>
  ))}