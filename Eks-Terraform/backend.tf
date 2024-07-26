terraform {
  backend "s3" {
    bucket = "youtube.nodejs" #try with your own bucket
    key    = "eks/terraform.tfstate"
    region = "us-east-1"
  }
}
