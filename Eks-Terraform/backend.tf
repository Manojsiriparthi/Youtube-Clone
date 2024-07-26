terraform {
  backend "s3" {
    bucket = "youtube.nodejs"
    key    = "eks/terraform.tfstate"
    region = "us-east-1"
  }
}
