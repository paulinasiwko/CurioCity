document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var city = document.getElementById('cityInput').value;
    window.location.href = 'landing.html?city=' + encodeURIComponent(city);
  });

  document.getElementById('luckyButton').addEventListener('click', function() {
    var cities = [
        'Tokyo', 'Delhi', 'Shanghai', 'Sao Paulo', 'Mumbai', 'Beijing', 'Cairo', 'Dhaka', 
        'Mexico City', 'Osaka', 'Karachi', 'Bangalore', 'New York', 'London', 'Bangkok', 
        'Kolkata', 'Istanbul', 'Buenos Aires', 'Chongqing', 'Lagos', 'Rio de Janeiro', 'Tianjin', 
        'Kinshasa', 'Guangzhou', 'Los Angeles', 'Moscow', 'Shenzhen', 'Lahore', 'Bangalore', 
        'Paris', 'Jakarta', 'Lima', 'Chennai', 'Seoul', 'Hyderabad', 'London', 'Tehran', 
        'Bogota', 'Ho Chi Minh City', 'Hong Kong', 'Baghdad', 'Fuzhou', 'Changsha', 'Wuhan', 
        'Hanoi', 'Chengdu', 'Kuala Lumpur', 'Santiago', 'Ahmedabad', 'Singapore', 'Shantou', 
        'Ankara', 'Yangon', 'Saint Petersburg', 'Sydney', 'Casablanca', 'Melbourne', 'Abidjan', 
        'Alexandria', 'Kolkata', 'Surat', 'Johannesburg', 'Dar es Salaam', 'Shenyang', 
        'Xi’an', 'Nairobi', 'Riyadh', 'Hangzhou', 'Miami', 'Quanzhou', 'Kunming', 'Zhengzhou', 
        'New Taipei City', 'Chicago', 'Chittagong', 'Taipei', 'Toronto', 'Luanda', 'Khartoum', 
        'Pune', 'Berlin', 'Jeddah', 'Madrid', 'Kyiv', 'Guadalajara', 'Barcelona', 'Izmir', 
        'Kitakyushu', 'Dalian', 'Rome', 'Busan', 'Algiers', 'Cape Town', 'Dubai', 'Montreal', 
        'Pusan', 'Medellin', 'Athens', 'Naples', 'Detroit', 'Havana', 'Accra', 'Harare'];
    var randomCity = cities[Math.floor(Math.random() * cities.length)];
    window.location.href = 'landing.html?city=' + encodeURIComponent(randomCity);
});

