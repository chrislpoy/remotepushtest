jQuery(document).ready(function($) {
    // Function to refresh the table content
    function refreshTable() {
        // Perform AJAX request to get updated table rows
        $.ajax({
            url: ajax_object.ajax_url,
            type: 'POST',
            data: {
                action: 'refresh_table_ajax' // Action to handle in WordPress
            },
            success: function(response) {
            }
        });
    }

    // Call refreshTable function every second
    setInterval(refreshTable, 1000);
});



