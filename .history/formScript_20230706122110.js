<script>
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.sqs-block-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting
    
    var DD = document.querySelector('#select-5a4378c9-2aa9-4ff7-8698-0c0ed68b7ea2-field').value;
    var R1 = form.querySelector('#radio-1a665528-fda9-421d-b23a-5d9de69d6e46').value;
    var R2 = form.querySelector('#radio-ee1b5b24-8aed-47c4-9aff-820f3680df11').value;
    
    // Create a message table object
    var messageTable = {
        'less than 20k square feet-Within the City of Seattle-Multifamily residential, single owner': 'Message 1',
        'less than 20k square feet-Within the City of Seattle-Multifamily residential, condo building/multiple owner': 'Message 2',
        'less than 20k square feet-Within the City of Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 3',
        'less than 20k square feet-Within the City of Seattle-Federally owned building (any type)': 'Message 4',
        'less than 20k square feet-Within Washington State-Multifamily residential, single owner': 'Message 5',
        'less than 20k square feet-Within Washington State-Multifamily residential, condo building/multiple owner': 'Message 6',
        'less than 20k square feet-Within Washington State-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 7',
        'less than 20k square feet-Within Washington State-Federally owned building (any type)': 'Message 8',
        'less than 20k square feet-Not in Seattle-Multifamily residential, single owner': 'Message 9',
        'less than 20k square feet-Not in Seattle-Multifamily residential, condo building/multiple owner': 'Message 10',
        'less than 20k square feet-Not in Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 11',
        'less than 20k square feet-Not in Seattle-Federally owned building (any type)': 'Message 12',
        'less than 20k square feet-On Federally recognized land of a Native nation-Multifamily residential, single owner': 'Message 13',
        'less than 20k square feet-On Federally recognized land of a Native nation-Multifamily residential, condo building/multiple owner': 'Message 14',
        'less than 20k square feet-On Federally recognized land of a Native nation-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 15',
        'less than 20k square feet-On Federally recognized land of a Native nation-Federally owned building (any type)': 'Message 16',

        '20k - 30k square feet-Within the City of Seattle-Multifamily residential, single owner': 'Message 21',
        '20k - 30k square feet-Within the City of Seattle-Multifamily residential, condo building/multiple owner': 'Message 22',
        '20k - 30k square feet-Within the City of Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 23',
        '20k - 30k square feet-Within the City of Seattle-Federally owned building (any type)': 'Message 24',
        '20k - 30k square feet-Within Washington State-Multifamily residential, single owner': 'Message 25',
        '20k - 30k square feet-Within Washington State-Multifamily residential, condo building/multiple owner': 'Message 26',
        '20k - 30k square feet-Within Washington State-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 27',
        '20k - 30k square feet-Within Washington State-Federally owned building (any type)': 'Message 28',
        '20k - 30k square feet-Not in Seattle-Multifamily residential, single owner': 'Message 29',
        '20k - 30k square feet-Not in Seattle-Multifamily residential, condo building/multiple owner': 'Message 210',
        '20k - 30k square feet-Not in Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 211',
        '20k - 30k square feet-Not in Seattle-Federally owned building (any type)': 'Message 212',
        '20k - 30k square feet-On Federally recognized land of a Native nation-Multifamily residential, single owner': 'Message 213',
        '20k - 30k square feet-On Federally recognized land of a Native nation-Multifamily residential, condo building/multiple owner': 'Message 214',
        '20k - 30k square feet-On Federally recognized land of a Native nation-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 215',
        '20k - 30k square feet-On Federally recognized land of a Native nation-Federally owned building (any type)': 'Message 216',

        '30k - 50k square feet-Within the City of Seattle-Multifamily residential, single owner': 'Message 1',
        '30k - 50k square feet-Within the City of Seattle-Multifamily residential, condo building/multiple owner': 'Message 2',
        '30k - 50k square feet-Within the City of Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 3',
        '30k - 50k square feet-Within the City of Seattle-Federally owned building (any type)': 'Message 4',
        '30k - 50k square feet-Within Washington State-Multifamily residential, single owner': 'Message 5',
        '30k - 50k square feet-Within Washington State-Multifamily residential, condo building/multiple owner': 'Message 6',
        '30k - 50k square feet-Within Washington State-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 7',
        '30k - 50k square feet-Within Washington State-Federally owned building (any type)': 'Message 8',
        '30k - 50k square feet-Not in Seattle-Multifamily residential, single owner': 'Message 9',
        '30k - 50k square feet-Not in Seattle-Multifamily residential, condo building/multiple owner': 'Message 10',
        '30k - 50k square feet-Not in Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 11',
        '30k - 50k square feet-Not in Seattle-Federally owned building (any type)': 'Message 12',
        '30k - 50k square feet-On Federally recognized land of a Native nation-Multifamily residential, single owner': 'Message 13',
        '30k - 50k square feet-On Federally recognized land of a Native nation-Multifamily residential, condo building/multiple owner': 'Message 14',
        '30k - 50k square feet-On Federally recognized land of a Native nation-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 15',
        '30k - 50k square feet-On Federally recognized land of a Native nation-Federally owned building (any type)': 'Message 16',

        '50k - 70k square feet-Within the City of Seattle-Multifamily residential, single owner': 'Message 1',
        '50k - 70k square feet-Within the City of Seattle-Multifamily residential, condo building/multiple owner': 'Message 2',
        '50k - 70k square feet-Within the City of Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 3',
        '50k - 70k square feet-Within the City of Seattle-Federally owned building (any type)': 'Message 4',
        '50k - 70k square feet-Within Washington State-Multifamily residential, single owner': 'Message 5',
        '50k - 70k square feet-Within Washington State-Multifamily residential, condo building/multiple owner': 'Message 6',
        '50k - 70k square feet-Within Washington State-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 7',
        '50k - 70k square feet-Within Washington State-Federally owned building (any type)': 'Message 8',
        '50k - 70k square feet-Not in Seattle-Multifamily residential, single owner': 'Message 9',
        '50k - 70k square feet-Not in Seattle-Multifamily residential, condo building/multiple owner': 'Message 10',
        '50k - 70k square feet-Not in Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 11',
        '50k - 70k square feet-Not in Seattle-Federally owned building (any type)': 'Message 12',
        '50k - 70k square feet-On Federally recognized land of a Native nation-Multifamily residential, single owner': 'Message 13',
        '50k - 70k square feet-On Federally recognized land of a Native nation-Multifamily residential, condo building/multiple owner': 'Message 14',
        '50k - 70k square feet-On Federally recognized land of a Native nation-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 15',
        '50k - 70k square feet-On Federally recognized land of a Native nation-Federally owned building (any type)': 'Message 16',

        '70k - 90k square feet-Within the City of Seattle-Multifamily residential, single owner': 'Message 1',
        '70k - 90k square feet-Within the City of Seattle-Multifamily residential, condo building/multiple owner': 'Message 2',
        '70k - 90k square feet-Within the City of Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 3',
        '70k - 90k square feet-Within the City of Seattle-Federally owned building (any type)': 'Message 4',
        '70k - 90k square feet-Within Washington State-Multifamily residential, single owner': 'Message 5',
        '70k - 90k square feet-Within Washington State-Multifamily residential, condo building/multiple owner': 'Message 6',
        '70k - 90k square feet-Within Washington State-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 7',
        '70k - 90k square feet-Within Washington State-Federally owned building (any type)': 'Message 8',
        '70k - 90k square feet-Not in Seattle-Multifamily residential, single owner': 'Message 9',
        '70k - 90k square feet-Not in Seattle-Multifamily residential, condo building/multiple owner': 'Message 10',
        '70k - 90k square feet-Not in Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 11',
        '70k - 90k square feet-Not in Seattle-Federally owned building (any type)': 'Message 12',
        '70k - 90k square feet-On Federally recognized land of a Native nation-Multifamily residential, single owner': 'Message 13',
        '70k - 90k square feet-On Federally recognized land of a Native nation-Multifamily residential, condo building/multiple owner': 'Message 14',
        '70k - 90k square feet-On Federally recognized land of a Native nation-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 15',
        '70k - 90k square feet-On Federally recognized land of a Native nation-Federally owned building (any type)': 'Message 16',

        '90k - 100k square feet-Within the City of Seattle-Multifamily residential, single owner': 'Message 1',
        '90k - 100k square feet-Within the City of Seattle-Multifamily residential, condo building/multiple owner': 'Message 2',
        '90k - 100k square feet-Within the City of Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 3',
        '90k - 100k square feet-Within the City of Seattle-Federally owned building (any type)': 'Message 4',
        '90k - 100k square feet-Within Washington State-Multifamily residential, single owner': 'Message 5',
        '90k - 100k square feet-Within Washington State-Multifamily residential, condo building/multiple owner': 'Message 6',
        '90k - 100k square feet-Within Washington State-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 7',
        '90k - 100k square feet-Within Washington State-Federally owned building (any type)': 'Message 8',
        '90k - 100k square feet-Not in Seattle-Multifamily residential, single owner': 'Message 9',
        '90k - 100k square feet-Not in Seattle-Multifamily residential, condo building/multiple owner': 'Message 10',
        '90k - 100k square feet-Not in Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 11',
        '90k - 100k square feet-Not in Seattle-Federally owned building (any type)': 'Message 12',
        '90k - 100k square feet-On Federally recognized land of a Native nation-Multifamily residential, single owner': 'Message 13',
        '90k - 100k square feet-On Federally recognized land of a Native nation-Multifamily residential, condo building/multiple owner': 'Message 14',
        '90k - 100k square feet-On Federally recognized land of a Native nation-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 15',
        '90k - 100k square feet-On Federally recognized land of a Native nation-Federally owned building (any type)': 'Message 16',

        '100k - 200k square feet-Within the City of Seattle-Multifamily residential, single owner': 'Message 1',
        '100k - 200k square feet-Within the City of Seattle-Multifamily residential, condo building/multiple owner': 'Message 2',
        '100k - 200k square feet-Within the City of Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 3',
        '100k - 200k square feet-Within the City of Seattle-Federally owned building (any type)': 'Message 4',
        '100k - 200k square feet-Within Washington State-Multifamily residential, single owner': 'Message 5',
        '100k - 200k square feet-Within Washington State-Multifamily residential, condo building/multiple owner': 'Message 6',
        '100k - 200k square feet-Within Washington State-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 7',
        '100k - 200k square feet-Within Washington State-Federally owned building (any type)': 'Message 8',
        '100k - 200k square feet-Not in Seattle-Multifamily residential, single owner': 'Message 9',
        '100k - 200k square feet-Not in Seattle-Multifamily residential, condo building/multiple owner': 'Message 10',
        '100k - 200k square feet-Not in Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 11',
        '100k - 200k square feet-Not in Seattle-Federally owned building (any type)': 'Message 12',
        '100k - 200k square feet-On Federally recognized land of a Native nation-Multifamily residential, single owner': 'Message 13',
        '100k - 200k square feet-On Federally recognized land of a Native nation-Multifamily residential, condo building/multiple owner': 'Message 14',
        '100k - 200k square feet-On Federally recognized land of a Native nation-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 15',
        '100k - 200k square feet-On Federally recognized land of a Native nation-Federally owned building (any type)': 'Message 16',

        '200k - 220k square feet-Within the City of Seattle-Multifamily residential, single owner': 'Message 1',
        '200k - 220k square feet-Within the City of Seattle-Multifamily residential, condo building/multiple owner': 'Message 2',
        '200k - 220k square feet-Within the City of Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 3',
        '200k - 220k square feet-Within the City of Seattle-Federally owned building (any type)': 'Message 4',
        '200k - 220k square feet-Within Washington State-Multifamily residential, single owner': 'Message 5',
        '200k - 220k square feet-Within Washington State-Multifamily residential, condo building/multiple owner': 'Message 6',
        '200k - 220k square feet-Within Washington State-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 7',
        '200k - 220k square feet-Within Washington State-Federally owned building (any type)': 'Message 8',
        '200k - 220k square feet-Not in Seattle-Multifamily residential, single owner': 'Message 9',
        '200k - 220k square feet-Not in Seattle-Multifamily residential, condo building/multiple owner': 'Message 10',
        '200k - 220k square feet-Not in Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 11',
        '200k - 220k square feet-Not in Seattle-Federally owned building (any type)': 'Message 12',
        '200k - 220k square feet-On Federally recognized land of a Native nation-Multifamily residential, single owner': 'Message 13',
        '200k - 220k square feet-On Federally recognized land of a Native nation-Multifamily residential, condo building/multiple owner': 'Message 14',
        '200k - 220k square feet-On Federally recognized land of a Native nation-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 15',
        '200k - 220k square feet-On Federally recognized land of a Native nation-Federally owned building (any type)': 'Message 16',

        'over 220k square feet-Within the City of Seattle-Multifamily residential, single owner': 'Message 1',
        'over 220k square feet-Within the City of Seattle-Multifamily residential, condo building/multiple owner': 'Message 2',
        'over 220k square feet-Within the City of Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 3',
        'over 220k square feet-Within the City of Seattle-Federally owned building (any type)': 'Message 4',
        'over 220k square feet-Within Washington State-Multifamily residential, single owner': 'Message 5',
        'over 220k square feet-Within Washington State-Multifamily residential, condo building/multiple owner': 'Message 6',
        'over 220k square feet-Within Washington State-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 7',
        'over 220k square feet-Within Washington State-Federally owned building (any type)': 'Message 8',
        'over 220k square feet-Not in Seattle-Multifamily residential, single owner': 'Message 9',
        'over 220k square feet-Not in Seattle-Multifamily residential, condo building/multiple owner': 'Message 10',
        'over 220k square feet-Not in Seattle-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 11',
        'over 220k square feet-Not in Seattle-Federally owned building (any type)': 'Message 12',
        'over 220k square feet-On Federally recognized land of a Native nation-Multifamily residential, single owner': 'Message 13',
        'over 220k square feet-On Federally recognized land of a Native nation-Multifamily residential, condo building/multiple owner': 'Message 14',
        'over 220k square feet-On Federally recognized land of a Native nation-Industrial (more than 50% of GFA falls under Factory Group F)': 'Message 15',
        'over 220k square feet-On Federally recognized land of a Native nation-Federally owned building (any type)': 'Message 16',
    };
    
    // Generate the combination key
    var combination = DD + '-' + R1 + '-' + R2;
    
    // Retrieve the message from the message table using the combination key
    var message = messageTable[combination] || 'Default message';
    
    // Show the alert with the corresponding message
    alert(message);
    
    // You can also choose to redirect the user to a different page based on the conditions using window.location.href = 'your-page-url';
  });
});
</script>