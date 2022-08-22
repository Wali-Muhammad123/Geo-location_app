import "../styles.css";
import tt from "@tomtom-international/web-sdk-services";
import { useState } from "react";
import ResultBox from "./resultBox";
export default function FuzzySearch() {
  const [name, setName] = useState("");
  const [result, setResult] = useState({});
  const fuzzySearch = (name) => {
    tt.services
      .fuzzySearch({
        key: "8h504Wc4AXL6OPndqhrtKf70AovVBL3V",
        query: name
      })
      .go()
      .then((res) => {
        console.log(res);
        const amendRes = res.results;
        console.log(amendRes);
        setResult(amendRes);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const calculateRoute = () => {
    tt.services
      .calculateRoute({
        key: "8h504Wc4AXL6OPndqhrtKf70AovVBL3V",
        locations: "3.13,6.8493:3.20793,6.55466"
      })
      .go()
      .then(function (routeData) {
        console.log(routeData.toGeoJson());
      })
      .catch((err) => console.log(err));
  };

  const resultList =
    result.length > 0 ? (
      result.map((resultItem) => (
        <div className="col-xs-12 col-md-4 col" key={resultItem.id}>
          <div className="box">
            <ResultBox result={resultItem} />
          </div>
        </div>
      ))
    ) : (
      <h2>No locations</h2>
    );

  return (
    <div class="form-body">
    <div class="row">
        <div class="form-holder">
            <div class="form-content">
                <div class="form-items">
                    <h3>Search details</h3>
                    <p> Enter the address below</p>
                    <form class="requires-validation" novalidate>

                        <div class="col-md-12">
                            <input
                            className="input"
                            type="text"
                            placeholder="Search Location"
                            class="form-control"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                fuzzySearch(name);
                                calculateRoute();
                              }
                            }}
                            required
                          />
                          {resultList}
                           <div class="valid-feedback">Valid Address found</div>
                           <div class="invalid-feedback">Address field cannot be blank!</div>
                        </div>
                        <div class="form-button mt-3">
                            <button id="submit" type="submit" class="btn btn-primary">Find Address</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
