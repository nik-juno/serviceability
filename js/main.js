let calculate = () => {
  let employmentIncome = $('#employmentIncome').val();
  let additionalIncome = $('#additionalIncome').val();
  let rentalIncome = $('#rentalIncome').val();

  let monthlyExpenses = $('#monthlyExpenses').val();
  let otherDebt = $('#otherDebt').val();
  let homeLoan = $('#homeLoan').val();

  let url = `https://06hi60fmrf.execute-api.ap-southeast-2.amazonaws.com/serviceability?employmentIncome=${employmentIncome}&additionalIncome=${additionalIncome}&rentalIncome=${rentalIncome}&monthlyExpenses=${monthlyExpenses}&otherDebt=${otherDebt}&homeLoan=${homeLoan}`;

  $.ajax({
    url: url,
    crossDomain: true,
    success: function(data) {
      $('#remainingAmount').text('Remaining amount based on home loan rate of 2.29% = $' + data.remainingAmount);
    }
  });

  return false;
}

$(function() {
  $("#prospects_form").submit(function(e) {
    e.preventDefault();
  });

  $('#calculate').click(calculate);
});
