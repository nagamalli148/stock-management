
        let mobileStock = 0;
        let tabletStock = 0;
        let laptopStock = 0;

        function addStock() {
            // ... (rest of your addStock logic)
            displayStockData();
        }

        function removeStock() {
            // ... (rest of your removeStock logic)
            displayStockData();
        }

        function displayStockData() {
            document.getElementById("mobile-stock-cell").textContent = mobileStock;
            document.getElementById("tablet-stock-cell").textContent = tabletStock;
            document.getElementById("laptop-stock-cell").textContent = laptopStock;

            updateTotalStockDisplay();
        }