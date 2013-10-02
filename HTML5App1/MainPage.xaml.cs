using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;
using System.ComponentModel;
using System.Windows.Input;

namespace HTML5App1
{
    public partial class MainPage : PhoneApplicationPage
    {
        // Url of Home page
        private string MainUri = "/Html/index.html";

        // Constructor
        public MainPage()
        {
            InitializeComponent();
        }


        private Stack<Uri> _history = new Stack<Uri>();

        protected override void OnBackKeyPress(CancelEventArgs e)
        {
            base.OnBackKeyPress(e);
            e.Cancel = true;
            if (Browser.Source.ToString().EndsWith("#/source"))
            {
                e.Cancel = false;
            }
            Browser.GoBack();
            //SystemTray.ProgressIndicator.IsIndeterminate = true;
           // SystemTray.ProgressIndicator.IsVisible = true;
        }

        private void BrowserNavigated(object sender, RoutedEventArgs e)
        { 
        
        }

        private void Border_ManipulationCompleted(object sender, ManipulationCompletedEventArgs e)
        {
            if (e.FinalVelocities.ExpansionVelocity.X != 0.0 ||
                e.FinalVelocities.ExpansionVelocity.Y != 0.0 )
                e.Handled = true;
            
        }

        private void Border_ManipulationDelta(object sender, ManipulationDeltaEventArgs e)
        {
            if (e.DeltaManipulation.Translation.X != 0.0 ||
                e.DeltaManipulation.Translation.Y != 0.0)
                e.Handled = true;
        }

        private void Browser_Loaded(object sender, RoutedEventArgs e)
        {
            Browser.IsScriptEnabled = true;
            Browser.Navigate(new Uri(MainUri, UriKind.Relative));
        }

        // Handle navigation failures.
        private void Browser_NavigationFailed(object sender, System.Windows.Navigation.NavigationFailedEventArgs e)
        {
            MessageBox.Show("Navigation to this page failed, check your internet connection");
        }
    }
}
