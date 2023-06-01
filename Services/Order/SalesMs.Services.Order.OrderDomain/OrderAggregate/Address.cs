using SalesMS.Services.Order.OrderCore;

namespace SalesMs.Services.Order.OrderDomain.OrderAggregate
{
    //owned
    public class Address : ValueObject
    {
        public string provience { get; private set; }
        public string district { get; private set; }
        public string street { get; private set; }
        public string zipcode { get; private set; }


        public Address(string provience, string district, string street, string zipcode)
        {
            this.provience = provience;
            this.district = district;
            this.street = streetValidator(street);
            this.zipcode = ZipCodeValidator(zipcode);
        }


        private string streetValidator(string _street)
        {
            if (string.IsNullOrEmpty(_street))
            {
                throw new Exception("Street can not be null or blank!") { };
            }

            return _street;
        }


        private string ZipCodeValidator(string _zipCode)
        {
            if (string.IsNullOrEmpty(_zipCode))
            {
                _zipCode = "NO ZIP";
            }

            return _zipCode;
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return provience;
            yield return district;
            yield return street;
            yield return zipcode;
        }
    }
}
