const nextButton = document.getElementById('next-button');
const searchContainer = document.querySelector('.search-container');
const keywordInput = document.getElementById('NG_CityForm_Input');
const searchSuggestions = document.querySelector('.search-suggestions');
const demandContainer = document.querySelector('.demand-container');
const demandInput = document.getElementById('NGF_Input');
const demandSuggestions = document.querySelector('.demand-suggestions');

nextButton.addEventListener('click', function() {
  if (searchContainer.style.display === 'none') {
    // 切换到搜索框
    searchContainer.style.display = 'block';
    keywordInput.focus();
    demandContainer.style.display = 'none';
  } else {
    // 切换到需求框
    searchContainer.style.display = 'none';
    demandContainer.style.display = 'block';
    demandInput.focus();
  }
});

keywordInput.addEventListener('input', function() {
  // 根据输入框内容显示搜索建议
  const keyword = keywordInput.value.trim();
  if (keyword) {
    searchSuggestions.style.display = 'block';
  } else {
    searchSuggestions.style.display = 'none';
  }
});

demandInput.addEventListener('input', function() {
  // 根据输入框内容显示需求建议
  const keyword = demandInput.value.trim();
  if (keyword) {
    demandSuggestions.style.display = 'block';
  } else {
    demandSuggestions.style.display = 'none';
  }
});

searchSuggestions.addEventListener('click', function(e) {
  // 点击搜索建议时，将建议内容填充到输入框中
  if (e.target.classList.contains('suggestion')) {
    const suggestion = e.target.textContent;
    keywordInput.value = suggestion;
    searchSuggestions.style.display = 'none';
  }
});

demandSuggestions.addEventListener('click', function(e) {
  // 点击需求建议时，将建议内容填充到输入框中
  if (e.target.classList.contains('suggestion')) {
    const suggestion = e.target.textContent;
    demandInput.value = suggestion;
    demandSuggestions.style.display = 'none';
  }
});