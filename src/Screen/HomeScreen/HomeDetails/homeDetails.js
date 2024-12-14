import React, { useEffect, useState } from 'react';
import './homeDetails.css';
import LongCardItem from '../../../longcard.json';
import axios from 'axios';

export const HomeDetails = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  useEffect(() => {
    // Upload functionality (commented out for data fetching)
    // const uploadFile = async () => {
    //   const file = new File(
    //     [JSON.stringify(LongCardItem)], // Using the imported JSON file
    //     'data.json',
    //     { type: 'application/json' } // Correct MIME type
    //   );

    //   const formData = new FormData();
    //   formData.append('file', file);

    //   try {
    //     const response = await axios.post('http://localhost:9000/upload-json', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     });
    //     console.log('File uploaded successfully:', response.data);
    //   } catch (error) {
    //     console.error('Error uploading file:', error);
    //   }
    // };

    // Uncomment the following lines to enable data fetching
   

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/fetch-json');
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError(error); // Set error state for handling (optional)
      }
    };


    

    fetchData();
  }, []);

//   console.log(data); // This line will now log the fetched data

  return (
    <div className='homeDetails'>
      <div className='homeDetailLongCard'>
        <div className='homeDetailLongCardTitle'>Today's Deals</div>
        <div className='homeDetailsLongCardItems'>
          <div className='scrollDiv'>
            {data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <div className='homeDetailLongCardItem'>
                    <img className='homeDetailsLongCardItemImg' src={item.imgs} />
                    <div className='homeDetailLongCardItemImgDetail'>
                      <div className='homeDetailLongCardItemImgTopDetail'>
                        <div className='homeDetailPercentageoff'>Up to 20% off</div>
                        <div className='limitedTimeDealhomeDetail'>Limited Time Deal</div>
                      </div>
                      <div className='bottomHomeDetail'>{item.itemTitle}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              !error && <p>Loading data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};