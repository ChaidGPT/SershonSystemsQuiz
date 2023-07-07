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
      'under20k-seattle-commercial': 'Message 1',
      'under20k-seattle-MFsingle': 'Message 2',
      'under20k-seattle-MFmultiple': 'Message 3',
      'under20k-seattle-industrial': 'Message 4',
      'under20k-seattle-federal': 'Message 5',
      'under20k-washington-commercial': 'Message 6',
      'under20k-washington-MFsingle': 'Message 7',
      'under20k-washington-MFmultiple': 'Message 8',
      'under20k-washington-industrial': 'Message 9',
      'under20k-washington-federal': 'Message 10',
      'under20k-native-commercial': 'Message 11',
      'under20k-native-MFsingle': 'Message 12',
      'under20k-native-MFmultiple': 'Message 13',
      'under20k-native-industrial': 'Message 14',
      'under20k-native-federal': 'Message 15',

      '20kTo30k-seattle-commercial': 'Message 16',
      '20kTo30k-seattle-MFsingle': 'Message 17',
      '20kTo30k-seattle-MFmultiple': 'Message 18',
      '20kTo30k-seattle-industrial': 'Message 19',
      '20kTo30k-seattle-federal': 'Message 20',
      '20kTo30k-washington-commercial': 'Message 21',
      '20kTo30k-washington-MFsingle': 'Message 22',
      '20kTo30k-washington-MFmultiple': 'Message 23',
      '20kTo30k-washington-industrial': 'Message 24',
      '20kTo30k-washington-federal': 'Message 25',
      '20kTo30k-native-commercial': 'Message 26',
      '20kTo30k-native-MFsingle': 'Message 27',
      '20kTo30k-native-MFmultiple': 'Message 28',
      '20kTo30k-native-industrial': 'Message 29',
      '20kTo30k-native-federal': 'Message 30',

      '30kTo50k-seattle-commercial': 'Message 31',
      '30kTo50k-seattle-MFsingle': 'Message 32',
      '30kTo50k-seattle-MFmultiple': 'Message 33',
      '30kTo50k-seattle-industrial': 'Message 34',
      '30kTo50k-seattle-federal': 'Message 35',
      '30kTo50k-washington-commercial': 'Message 36',
      '30kTo50k-washington-MFsingle': 'Message 37',
      '30kTo50k-washington-MFmultiple': 'Message 38',
      '30kTo50k-washington-industrial': 'Message 39',
      '30kTo50k-washington-federal': 'Message 40',
      '30kTo50k-native-commercial': 'Message 41',
      '30kTo50k-native-MFsingle': 'Message 42',
      '30kTo50k-native-MFmultiple': 'Message 43',
      '30kTo50k-native-industrial': 'Message 44',
      '30kTo50k-native-federal': 'Message 45',

      '50kTo70k-seattle-commercial': 'Message 46',
      '50kTo70k-seattle-MFsingle': 'Message 47',
      '50kTo70k-seattle-MFmultiple': 'Message 48',
      '50kTo70k-seattle-industrial': 'Message 49',
      '50kTo70k-seattle-federal': 'Message 50',
      '50kTo70k-washington-commercial': 'Message 51',
      '50kTo70k-washington-MFsingle': 'Message 52',
      '50kTo70k-washington-MFmultiple': 'Message 53',
      '50kTo70k-washington-industrial': 'Message 54',
      '50kTo70k-washington-federal': 'Message 55',
      '50kTo70k-native-commercial': 'Message 56',
      '50kTo70k-native-MFsingle': 'Message 57',
      '50kTo70k-native-MFmultiple': 'Message 58',
      '50kTo70k-native-industrial': 'Message 59',
      '50kTo70k-native-federal': 'Message 60',

      '70kTo90k-seattle-commercial': 'Message 61',
      '70kTo90k-seattle-MFsingle': 'Message 62',
      '70kTo90k-seattle-MFmultiple': 'Message 63',
      '70kTo90k-seattle-industrial': 'Message 64',
      '70kTo90k-seattle-federal': 'Message 65',
      '70kTo90k-washington-commercial': 'Message 66',
      '70kTo90k-washington-MFsingle': 'Message 67',
      '70kTo90k-washington-MFmultiple': 'Message 68',
      '70kTo90k-washington-industrial': 'Message 69',
      '70kTo90k-washington-federal': 'Message 70',
      '70kTo90k-native-commercial': 'Message 71',
      '70kTo90k-native-MFsingle': 'Message 72',
      '70kTo90k-native-MFmultiple': 'Message 73',
      '70kTo90k-native-industrial': 'Message 74',
      '70kTo90k-native-federal': 'Message 75',

      '90kTo100k-seattle-commercial': 'Message 76',
      '90kTo100k-seattle-MFsingle': 'Message 77',
      '90kTo100k-seattle-MFmultiple': 'Message 78',
      '90kTo100k-seattle-industrial': 'Message 79',
      '90kTo100k-seattle-federal': 'Message 80',
      '90kTo100k-washington-commercial': 'Message 81',
      '90kTo100k-washington-MFsingle': 'Message 82',
      '90kTo100k-washington-MFmultiple': 'Message 83',
      '90kTo100k-washington-industrial': 'Message 84',
      '90kTo100k-washington-federal': 'Message 85',
      '90kTo100k-native-commercial': 'Message 86',
      '90kTo100k-native-MFsingle': 'Message 87',
      '90kTo100k-native-MFmultiple': 'Message 88',
      '90kTo100k-native-industrial': 'Message 89',
      '90kTo100k-native-federal': 'Message 90',

      '100kTo200k-seattle-commercial': 'Message 91',
      '100kTo200k-seattle-MFsingle': 'Message 92',
      '100kTo200k-seattle-MFmultiple': 'Message 93',
      '100kTo200k-seattle-industrial': 'Message 94',
      '100kTo200k-seattle-federal': 'Message 95',
      '100kTo200k-washington-commercial': 'Message 96',
      '100kTo200k-washington-MFsingle': 'Message 97',
      '100kTo200k-washington-MFmultiple': 'Message 98',
      '100kTo200k-washington-industrial': 'Message 99',
      '100kTo200k-washington-federal': 'Message 100',
      '100kTo200k-native-commercial': 'Message 101',
      '100kTo200k-native-MFsingle': 'Message 102',
      '100kTo200k-native-MFmultiple': 'Message 103',
      '100kTo200k-native-industrial': 'Message 104',
      '100kTo200k-native-federal': 'Message 105',

      '200kTo220k-seattle-commercial': 'Message 106',
      '200kTo220k-seattle-MFsingle': 'Message 107',
      '200kTo220k-seattle-MFmultiple': 'Message 108',
      '200kTo220k-seattle-industrial': 'Message 109',
      '200kTo220k-seattle-federal': 'Message 110',
      '200kTo220k-washington-commercial': 'Message 111',
      '200kTo220k-washington-MFsingle': 'Message 112',
      '200kTo220k-washington-MFmultiple': 'Message 113',
      '200kTo220k-washington-industrial': 'Message 114',
      '200kTo220k-washington-federal': 'Message 115',
      '200kTo220k-native-commercial': 'Message 116',
      '200kTo220k-native-MFsingle': 'Message 117',
      '200kTo220k-native-MFmultiple': 'Message 118',
      '200kTo220k-native-industrial': 'Message 119',
      '200kTo220k-native-federal': 'Message 120',

      'over220k-seattle-commercial': 'Message 121',
      'over220k-seattle-MFsingle': 'Message 122',
      'over220k-seattle-MFmultiple': 'Message 123',
      'over220k-seattle-industrial': 'Message 124',
      'over220k-seattle-federal': 'Message 125',
      'over220k-washington-commercial': 'Message 126',
      'over220k-washington-MFsingle': 'Message 127',
      'over220k-washington-MFmultiple': 'Message 128',
      'over220k-washington-industrial': 'Message 129',
      'over220k-washington-federal': 'Message 130',
      'over220k-native-commercial': 'Message 131',
      'over220k-native-MFsingle': 'Message 132',
      'over220k-native-MFmultiple': 'Message 133',
      'over220k-native-industrial': 'Message 134',
      'over220k-native-federal': 'Message 135'
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